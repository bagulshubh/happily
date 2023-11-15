import React from 'react'
import { createClientMessage } from 'react-chatbot-kit'
import ActionProvider from '../ChatBot/ActionProvider'

const ButtonCom = (props) => {


  return (
    <div onClick={props.actions.handlegotit} className='button'>
      Got It
    </div>
  )
}

export default ButtonCom
