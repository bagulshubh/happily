import React, { useState } from 'react'
import { setage } from '../slices/age';
import { useDispatch } from 'react-redux';
import { FaAngleDown } from "react-icons/fa6";


const DropDown = (props) => {
  
    const [selected , setselected] = useState(true);
    const dispatch = useDispatch();
  
    const clickHandler = ()=>{
        setselected(!selected);
    }

    const arr = [];
    for(let i = 18;i<41;i++){
        arr.push(i);
    }

    const agehandler = (i)=>{
        dispatch(setage(i));
        setselected("null")
        props.actions.sayAge(i);
    }

    return (
    <div>
      {
        selected === "null" ? <div></div> : selected  ? (<div onClick={clickHandler} className='button wide'>Select Age <FaAngleDown></FaAngleDown></div>) : (<div className='select-con'>
            {
                arr.map((i)=>{
                    return (
                        <div onClick={()=> {agehandler(i)}} className='select'>{i}</div>
                    )
                })
            }
        </div>)
      }
    </div>
  )
}

export default DropDown
