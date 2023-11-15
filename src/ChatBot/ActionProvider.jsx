import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const {date} = useSelector((state)=>(state.date));
    const {session} = useSelector((state)=>(state.date));
    const navigate = useNavigate();

    const handlegotit = ()=>{
        const message = createClientMessage("Got It");

        setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));

        handlesecond();
        
    }

    const handlesecond = ()=>{
        const message = createChatBotMessage("Pick a slot !",{
            widget:"Calendar"
        });
        setState((prevState) => ({
            ...prevState,
            messages:[...prevState.messages,message],
        }))
    }

    const displayTime = (session1)=>{
      const message = createClientMessage(`${date} , ${session1}`)

      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));

      handlethird();

    }

    const handlethird  = ()=>{
      const message = createChatBotMessage("Enter Your Name");

      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));

    }

    const handlefourth = ()=>{
      const message = createChatBotMessage("Enter Your Age",
      {
        widget:"Dropdown"
      });

      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));      
    }

    const sayAge = (age)=>{
      const message = createClientMessage(`Your Age: ${age}`);
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      })); 
      lasthandler();
    }

    const lasthandler = ()=>{
      const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit");
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      })); 

        let count = 0;
      
        const intervalId = setInterval(() => {
          count++;
      
          if (count <= 5) {
            console.log(`Count: ${count}`);
          } else {
            clearInterval(intervalId);
            
            navigate("/info");
          }
        }, 1000); // The interval is set to 1000 milliseconds (1 second)
        
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handlegotit,handlesecond,displayTime,handlethird,handlefourth,lasthandler,sayAge},
        });
      })}
    </div>
  );
};

export default ActionProvider;