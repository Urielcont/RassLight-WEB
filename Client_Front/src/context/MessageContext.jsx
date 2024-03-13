import { createContext, useContext, useState } from "react";
import { sendMessageRequest, getMessagesRequest } from "../api/message.js";

const MessageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export function MessageProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await getMessagesRequest();
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createMessage = async (message) => {
    const res = await sendMessageRequest(message);
    console.log(res);
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        createMessage,
        getMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
