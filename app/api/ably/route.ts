import getMe from "@/utils/auth/me";
import { SignJWT } from "jose";

const createToken = (
  clientId: string,
  apiKey: string,
  claim: { isMod: boolean },
  capability: { [key: string]: string[] | undefined },
) => {
  const [appId, signingKey] = apiKey.split(":", 2);
  const enc = new TextEncoder();
  const token = new SignJWT({
    "x-ably-capability": JSON.stringify(capability),
    "x-ably-clientId": clientId,
    "ably.channel.*": JSON.stringify(claim),
    // 'ably.limits.publish.perAttachment.maxRate.chat': 0.1,
  })
    .setProtectedHeader({ kid: appId, alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(enc.encode(signingKey));
  return token;
};

const generateCapability = (claim: { isMod: boolean }) => {
  if (claim.isMod) {
    return { "*": ["*"] };
  } else {
    return {
      "chat:general": ["subscribe", "publish", "presence", "history"],
      "chat:random": ["subscribe", "publish", "presence", "history"],
      "chat:announcements": ["subscribe", "presence", "history"],
    };
  }
};

export const GET = async () => {
  try {
    const session = await getMe({});
    const user = session?.data?.me;

    const userClaim = {
      isMod: false,
    };
    const userCapability = generateCapability(userClaim);

    const token =
      user?.email &&
      (await createToken(
        user?.email,
        process.env.NEXT_PUBLIC_ABLY_SECRET_KEY as string,
        userClaim,
        userCapability,
      ));

    console.log({ session, user, userClaim, userCapability, token });

    return Response.json(token || "");
  } catch (error) {
    console.log({ error });
    return new Response((error as Error).message, { status: 500 });
  }
};
