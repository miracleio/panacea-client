"use client";

import Chat from "@/components/Chat";
import { Realtime } from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
const ABLY_KEY = process.env.NEXT_PUBLIC_ABLY_SECRET_KEY as string;
export type SessionData = {
  id: string;
  user: {
    firstName: string;
    email: string;
  };
  browsingPage: string;
};

const ChatPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const channelName = `chat:${params.id}`;

  const sessionData = {
    id: channelName,
    user: {
      firstName: "Miracle",
      email: "miracleficient@gmail.com",
    },
    browsingPage: "https:/trypanacea.netlify.app/",
  };

  console.log({ params, sessionData });
  // 👉 Instantiate Ably client
  const client = new Realtime({
    key: ABLY_KEY,
    authUrl: "/api/ably",
    autoConnect: typeof window !== "undefined",
  });

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={channelName}>
        <main>
          <section className="site-section h-screen !py-6">
            <div className="wrapper relative flex h-full flex-col gap-4">
              <Chat session={sessionData} />
            </div>
          </section>
        </main>
      </ChannelProvider>
    </AblyProvider>
  );
};

export default ChatPage;
