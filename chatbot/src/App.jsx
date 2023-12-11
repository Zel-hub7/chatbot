import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {  
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react'


function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello I am ChatGPT!",
      sender: "ChatGPT!"
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
  };

  const newMessages = [...messages, newMessage];

  setMessages(newMessages);

  setIsTyping(true);

}



  return (
    <div className='App'>
      <div style={{ position:"relative", height: "800px", width: "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {
                messages.map((message, i) => {
                  return <Message key ={i} model={message} />
                })
              }
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>

      </div>
    </div>
 
    )
}

export default App
