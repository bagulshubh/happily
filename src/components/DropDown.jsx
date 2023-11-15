import React, { useState } from 'react'
import { setage } from '../slices/age';
import { useDispatch } from 'react-redux';

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
        props.actions.sayAge(i);
    }

    return (
    <div>
      {
        selected ? (<div onClick={clickHandler}>Select Age</div>) : (<div>
            {
                arr.map((i)=>{
                    return (
                        <div onClick={()=> {agehandler(i)}}>{i}</div>
                    )
                })
            }
        </div>)
      }
    </div>
  )
}

export default DropDown
