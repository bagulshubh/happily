import React, { useState } from 'react'
import { createClientMessage } from 'react-chatbot-kit'
import ActionProvider from '../ChatBot/ActionProvider'

const ButtonCom = (props) => {

  const [state,setstate] = useState(true);

  const clickHandler = ()=>{
    setstate(false);
    props.actions.handlegotit();
  }

  return (
    <div >
    {
      state ? <div onClick={clickHandler} className='button'>Got It</div> : <div></div>
    }
    </div>
  )
}

export default ButtonCom
