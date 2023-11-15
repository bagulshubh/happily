import React from 'react';
import { setUserName } from '../slices/name';
import { useDispatch } from 'react-redux';

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  const parse = (message) => {
    if(message.includes("Got")){
      actions.handlesecond();
    }
    if(message.includes("")){
      dispatch(setUserName(message));
      actions.handlefourth();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;