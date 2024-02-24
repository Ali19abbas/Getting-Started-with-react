import React, {useState} from 'react';
import './expences.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function AppData(props){
  const [title, setTitle]=useState(props.title)
  const [amount, setAmount]=useState(props.amount)

  function eventhandle(){
    alert("button clicked")
    setTitle("updated")
    setAmount("$100")
  }
    
      return (<div className="container cont">
        <div className="date">
            <h5>{props.month}</h5>
            <h6>{props.day}</h6>
            <h6>{props.time}</h6>
            
        </div>

     <h3>{title}</h3>
     <h3><span class="badge bg-secondary">{amount}</span></h3>
     <button className='btn btn-danger' onClick={eventhandle}>Update</button>
</div>)
}