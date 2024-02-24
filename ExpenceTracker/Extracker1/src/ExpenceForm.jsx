import React, {useState} from 'react';
import './expences.css'
import 'bootstrap/dist/css/bootstrap.min.css'



let user={
  title: null,
  amount: null,
  month:null,
  day:null,
  time:null
}

 const ExpenceForm=()=>{
  const [enteredTitle,setEnteredTitle]=useState('');  
  const [enteredAmount,setEnteredAmount]=useState('');  
  const [enteredMonth,setEnteredMonth]=useState('');  
  const [enteredTime,setEnteredTime]=useState('');  
  const [enteredDay,setEnteredDay]=useState('');   

   function changeTitle(){
    let x=(document.getElementById("formGroupExampleInput").value)
       console.log(user["title"]=x)
       setEnteredTitle(x);
       console.log(user)
        
   }
   function changeAmount(){
    let x=(document.getElementById("formGroupExampleInput2").value)
       console.log(user["amount"]=x)
       setEnteredAmount(x);
        
   }
   function changeTime(){
    let x=(document.getElementById("formGroupExampleInput3").value)
       console.log(user["time"]=x)
       setEnteredTime(x);
        
   }
   function changeMonth(){
    let x=(document.getElementById("formGroupExampleInput4").value)
       console.log(user["month"]=x)
       setEnteredMonth(x);
        
   }
   function changeDay(){
    let x=(document.getElementById("formGroupExampleInput5").value)
       console.log(user["day"]=x)
       setEnteredDay(x);
        
   }


    return <>

<form action="" id='form'><div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Enter Title</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" onChange={changeTitle}></input>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Enter Amount</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" onChange={changeAmount}></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput3" className="form-label">Enter Time</label>
  <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="" onChange={changeTime}></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput4" className="form-label">Enter month</label>
  <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="" onChange={changeMonth}></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput5" className="form-label">Enter Day</label>
  <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="" onChange={changeDay}></input>
</div>

<button  className="btn btn-danger">Add</button>
</form>
    
</>
}

export default ExpenceForm;