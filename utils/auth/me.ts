import { User } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
import { cookies } from "next/headers";
import handleRefreshToken from "@/utils/auth/refreshToken";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const ME_QUERY = `
query Me {
  me {
    id
    firstName
    lastName
    email
    emailVerified
    picture
    roles {
      id
      name
    }
  }
}
`;

const getMe = async ({ token }: { token?: string }, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      const cookiesStore = cookies();
      const accessToken = cookiesStore.get("accessToken")?.value;
      const refreshToken = cookiesStore.get("refreshToken")?.value;
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      } else if (refreshToken) {
        const refreshedToken = await handleRefreshToken({
          token: refreshToken,
        });
        headers.Authorization = `Bearer ${refreshedToken.data?.accessToken}`;
      }
    }

    const data = await graphqlRequest<{ me: User }>(
      url || GRAPHQL_API,
      {
        query: ME_QUERY,
      },
      headers,
    );

    console.log("🚀 ~ file: me.ts ~ line 52 ~ getMe ~ data", data);

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ getMe error: ", error);
    throw new Error(error.message);
  }
};

export default getMe;
