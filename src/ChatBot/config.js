// in the config
import React from 'react';
import {
  createChatBotMessage,
  createClientMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import ButtonCom from '../components/ButtonCom';
import ActionProvider from './ActionProvider';
import Calender from '../components/Calender';
import DropDown from '../components/DropDown';


const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello, Welcome to student info system!`
    ,
    {
        widget:"Button"
    }
    ),
  ],
  widgets: [
    {
        widgetName: "Button",
        widgetFunc: (props) => <ButtonCom {...props}/>
    },
    {
        widgetName:"Calendar",
        widgetFunc: (props) => <Calender {...props}/>
    },
    {
      widgetName:"Dropdown",
      widgetFunc: (props) => <DropDown {...props}/>
    }
  ],
};

export default config;