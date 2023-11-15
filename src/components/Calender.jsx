import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { setdate , setsession } from '../slices/date';
import { useDispatch } from 'react-redux';

const Calender = (props) => {
  
    const [date,setDate] = useState(new Date());
    const [variable,setvariable] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log(date);
      dispatch(setdate(date));
      setvariable(!variable);
    },[date]);

    const clickHandler1 = ()=>{
      dispatch(setsession("Morning"));
      props.actions.displayTime("Morning");
    }
      
    const clickHandler2 = ()=>{
      dispatch(setsession("AfterNoon"));
      props.actions.displayTime("AfterNoon");
    }

    const clickHandler3 = ()=>{
      dispatch(setsession("Evening"));
      props.actions.displayTime("Evening");
    }

    return (
    <div>
      <div className='calendar-container'>
      {
        variable ? (<div className='time-slot-con'>
          <div className='timeslot' onClick={clickHandler1}>Morning</div>
          <div className='timeslot' onClick={clickHandler2}>AfterNoon</div>
          <div className='timeslot' onClick={clickHandler3}>Evening</div>
        </div>) : (
          <Calendar onChange={setDate} value={date} />
        )
      }
        
      </div>
    </div>
  )
}

export default Calender
