
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log("conversations:",conversations)

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Array.isArray(conversations) && conversations.map((conversation, idx) => (
        <Conversation 
        key={conversation._id} 
        conversation={conversation} 
        lastIdx={idx === conversations.length - 1} 
        emoji={getRandomEmoji()}/> 
      ))}
        
          {loading? <span className="loading loading-spinner mx-auto"></span>: null }
    </div>
  )
}
export default Conversations 