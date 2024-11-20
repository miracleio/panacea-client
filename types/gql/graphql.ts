/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  JSON: { input: any; output: any };
};

export type ApiKey = {
  __typename?: "ApiKey";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<User>;
};

export type App = {
  __typename?: "App";
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type AppData = {
  __typename?: "AppData";
  data?: Maybe<Array<Maybe<App>>>;
  meta?: Maybe<Meta>;
};

export type AppFilter = {
  app?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppKey = {
  __typename?: "AppKey";
  app?: Maybe<App>;
  id?: Maybe<Scalars["ID"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
};

export type AppKeyData = {
  __typename?: "AppKeyData";
  data?: Maybe<Array<Maybe<AppKey>>>;
  meta?: Maybe<Meta>;
};

export type AppKeyFilter = {
  app?: InputMaybe<Scalars["ID"]["input"]>;
};

export type AuthData = {
  __typename?: "AuthData";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type ChatSession = {
  __typename?: "ChatSession";
  app?: Maybe<App>;
  id?: Maybe<Scalars["ID"]["output"]>;
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<ChatUser>;
};

export type ChatSessionData = {
  __typename?: "ChatSessionData";
  data?: Maybe<Array<Maybe<ChatSession>>>;
  meta?: Maybe<Meta>;
};

export type ChatSessionFilter = {
  app?: InputMaybe<Scalars["ID"]["input"]>;
  siteUrl?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<ChatUserInput>;
};

export type ChatUser = {
  __typename?: "ChatUser";
  avatar?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

export type ChatUserInput = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateAppInput = {
  description: Scalars["String"]["input"];
  icon?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
};

export type CreateAppKeyInput = {
  app: Scalars["ID"]["input"];
};

export type CreateChatSessionInput = {
  siteUrl: Scalars["String"]["input"];
  user: ChatUserInput;
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Meta = {
  __typename?: "Meta";
  limit?: Maybe<Scalars["Int"]["output"]>;
  page?: Maybe<Scalars["Int"]["output"]>;
  pages?: Maybe<Scalars["Int"]["output"]>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createApp?: Maybe<App>;
  createAppKey?: Maybe<AppKey>;
  createChatSession?: Maybe<ChatSession>;
  createRole?: Maybe<Role>;
  deleteApp?: Maybe<App>;
  deleteAppKey?: Maybe<AppKey>;
  deleteRole?: Maybe<Role>;
  deleteUser?: Maybe<User>;
  generateApiKey?: Maybe<ApiKey>;
  generateAppKey?: Maybe<AppKey>;
  googleAuth?: Maybe<AuthData>;
  login?: Maybe<AuthData>;
  refreshToken: RefreshPayload;
  register?: Maybe<RegisterData>;
  requestPasswordReset?: Maybe<Scalars["Boolean"]["output"]>;
  resetPassword?: Maybe<Scalars["Boolean"]["output"]>;
  revokeApiKey?: Maybe<ApiKey>;
  sendOTP?: Maybe<Scalars["String"]["output"]>;
  updateApp?: Maybe<App>;
  updateUser?: Maybe<User>;
  verifyOTP?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MutationCreateAppArgs = {
  input: CreateAppInput;
};

export type MutationCreateAppKeyArgs = {
  input: CreateAppKeyInput;
};

export type MutationCreateChatSessionArgs = {
  input: CreateChatSessionInput;
};

export type MutationCreateRoleArgs = {
  name: Scalars["String"]["input"];
};

export type MutationDeleteAppArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteAppKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationGenerateAppKeyArgs = {
  app: Scalars["ID"]["input"];
};

export type MutationGoogleAuthArgs = {
  code: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRefreshTokenArgs = {
  token: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationRequestPasswordResetArgs = {
  email: Scalars["String"]["input"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationRevokeApiKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationSendOtpArgs = {
  input: SendOtpInput;
};

export type MutationUpdateAppArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateAppInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type Otp = {
  __typename?: "OTP";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  otp?: Maybe<Scalars["String"]["output"]>;
};

export type Pagination = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PasswordResetToken = {
  __typename?: "PasswordResetToken";
  expires: Scalars["String"]["output"];
  id?: Maybe<Scalars["ID"]["output"]>;
  token: Scalars["String"]["output"];
  userId: Scalars["ID"]["output"];
};

export type Query = {
  __typename?: "Query";
  apiKey?: Maybe<ApiKey>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  app?: Maybe<App>;
  appKey?: Maybe<AppKey>;
  appKeys?: Maybe<AppKeyData>;
  apps?: Maybe<AppData>;
  chatSession?: Maybe<ChatSession>;
  chatSessions?: Maybe<ChatSessionData>;
  me?: Maybe<User>;
  otp?: Maybe<Otp>;
  otps?: Maybe<Array<Maybe<Otp>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  user?: Maybe<User>;
  users?: Maybe<UserData>;
};

export type QueryApiKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAppArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAppKeyArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAppKeysArgs = {
  filter?: InputMaybe<AppKeyFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryAppsArgs = {
  filter?: InputMaybe<AppFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryChatSessionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryChatSessionsArgs = {
  filter?: InputMaybe<ChatSessionFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryOtpArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type RefreshPayload = {
  __typename?: "RefreshPayload";
  accessToken: Scalars["String"]["output"];
};

export type RegisterData = {
  __typename?: "RegisterData";
  user?: Maybe<User>;
};

export type RegisterInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type SendOtpInput = {
  email: Scalars["String"]["input"];
};

export type UpdateAppInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  picture?: Maybe<Scalars["String"]["output"]>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserData = {
  __typename?: "UserData";
  data?: Maybe<Array<Maybe<User>>>;
  meta?: Maybe<Meta>;
};

export type VerifyOtpInput = {
  email: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};
