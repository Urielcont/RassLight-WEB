// import { createContext, useContext, useState } from "react";

// const MessageContext = createContext();

// export const useMessage = () => {
//   const context = useContext(MessageContext);
//   if (!context) throw new Error("useTasks must be used within a TaskProvider");
//   return context;
// };

// export function MessageProvider({ children }) {
//   const [messages, setMessages] = useState([]);
//   return (
//     <MessageProvider.Provider
//       value={{
//         messages,
//       }}
//     >
//       {children}
//     </MessageProvider.Provider>
//   );
// }
