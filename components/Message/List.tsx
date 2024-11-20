import { useUserStore } from "@/store/useUserStore";
import { InboundMessage } from "ably";
import { AnimatePresence, motion } from "framer-motion";
// import { InboundMessage } from "ably";
import { Trash } from "lucide-react";

const MessageList: React.FC<{
  messages: InboundMessage[];
  onDelete: (timeserial: string) => void;
}> = ({ messages, onDelete }) => {
  const { user } = useUserStore();
  // console.log({ messages });
  const messageListItem = (message: InboundMessage) => {
    return (
      <motion.li
        key={message.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="group flex justify-between rounded-lg border border-gray-300 bg-gray-200 p-3 px-4 shadow-inner shadow-gray-50 dark:bg-slate-700"
      >
        <div className="flex items-center">
          <p>{message.data.text}</p>
        </div>
        <button
          onClick={() =>
            message?.extras && onDelete(message?.extras.timeserial)
          }
          disabled={message.clientId !== user?.email}
          className="btn ghost hidden"
        >
          <Trash className="icon" />
        </button>
      </motion.li>
    );
  };

  return (
    <ul className="flex flex-col gap-1">
      <AnimatePresence mode="sync">
        {messages.map(messageListItem)}
      </AnimatePresence>
    </ul>
  );
};

export default MessageList;
