import config from '../ChatBot/config.js';
import ActionProvider from '../ChatBot/ActionProvider.jsx';
import MessageParser from '../ChatBot/MessageParser.jsx';
import Chatbot from 'react-chatbot-kit'

const ChatbotCom = () => {



  return (
    <div className='chatbot-con'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotCom;
