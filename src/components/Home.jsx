import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate();

    const clickHandler = ()=>{
        navigate("/chatbot");
    }

  return (
    <div>
      
        <div>
            
            <h1>Enter Into Student Info System</h1>

            <div onClick={clickHandler} className='button short'>Enroll Now</div>

        </div>


    </div>
  )
}

export default Home
