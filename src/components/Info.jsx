import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Info = () => {

    const {userName} = useSelector((state)=>(state.name));
    const {age} = useSelector((state)=>(state.age)); 

    const navigate = useNavigate();

    const clickHandler = ()=>{
        navigate("/")
    }

  return (
    <div className='info-con'>
      Your name {userName} aged {age} has been added to student system. You may now exit.

      <div className='button short' onClick={clickHandler}>Exit</div>
    </div>
  )
}

export default Info
