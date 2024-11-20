"use client";

import { SessionData } from "@/app/(chat)/chat/[id]/page";
import MessageList from "@/components/Message/List";
import MessageInput from "@/components/Message/Input";
import { useChannel } from "ably/react";

import { InboundMessage } from "ably";
import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";

type ChatProps = { session: SessionData };

const Chat: React.FC<ChatProps> = ({ session }) => {
  const { user } = useUserStore();

  const [messages, setMessages] = useState<InboundMessage[]>([]);
  // 👉 useChannel accepts the channel name and a function to invoke when
  //    new messages are received. We pass dispatch.
  const { channel, publish } = useChannel(session.id, (message) => {
    if (message.name === "ADD")
      setMessages((messages) => [...messages, message as InboundMessage]);
    if (message.name === "DELETE")
      setMessages((messages) =>
        messages.filter((m) => {
          const matchingMessage =
            m.extras?.timeserial === message.extras?.ref?.timeserial;
          const isOwnMessage = m.clientId === message.clientId;
          return !(matchingMessage && isOwnMessage);
        }),
      );
  });

  const publishMessage = (text: string) => {
    // 👉 Publish event through Ably
    publish({
      name: "ADD",
      data: {
        text,
        avatarUrl: `https://www.tapback.co/api/avatar/${user?.email}`,
      },
    });
  };

  const handleDelete = (timeserial: string) => {
    publish({
      name: "DELETE",
      extras: {
        ref: {
          timeserial,
        },
      },
    });
  };

  useEffect(() => {
    let ignore = false;
    const fetchHist = async () => {
      console.log("fetching history");
      const history = await channel.history({
        limit: 100,
        direction: "forwards",
      });
      console.log({ history });
      if (!ignore)
        history.items.forEach((item) => {
          if (item.name === "ADD")
            setMessages((messages) => [...messages, item as InboundMessage]);
          if (item.name === "DELETE")
            setMessages((messages) =>
              messages.filter((m) => {
                const matchingMessage =
                  m.extras?.timeserial === item.extras?.ref?.timeserial;
                const isOwnMessage = m.clientId === item.clientId;
                return !(matchingMessage && isOwnMessage);
              }),
            );
        });
    };
    fetchHist();
    return () => {
      ignore = true;
    };
  }, [channel]);

  return (
    <>
      <header className="chat-header sticky top-0 bg-white">
        <div className="wrapper">
          <h1 className="text-xl lg:text-4xl">
            Hi, <strong>{session.user.firstName}</strong>
          </h1>
          <p>How can we help you today?</p>
        </div>
      </header>
      <div className="flex min-h-0 flex-1 grow flex-col gap-4">
        <div className="overflow-y-auto">
          <MessageList messages={messages} onDelete={handleDelete} />
        </div>
        <div className="bottom-0 left-0 right-0 mt-auto bg-white py-1">
          <MessageInput onSubmit={publishMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
