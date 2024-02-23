import React, {useState} from 'react';
import './expences.css'
import 'bootstrap/dist/css/bootstrap.min.css'



let user={
  title: null,
  amount: null,
  month:null,
  year:null,
  time:null
}

 const ExpenceForm=()=>{

   function eventhandler(){
       console.log(user["title"]=(document.getElementById("formGroupExampleInput").value))
       user["amount"]=document.getElementById("formGroupExampleInput2").value
       user["time"]=document.getElementById("formGroupExampleInput3").value
       user["month"]=document.getElementById("formGroupExampleInput4").value
       user["year"]=document.getElementById("formGroupExampleInput5").value

       
       
   }


    return <>

<form action="" id='form'><div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Enter Title</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" onChange={eventhandler}></input>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Enter Amount</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput3" className="form-label">Enter Time</label>
  <input type="text" className="form-control" id="formGroupExampleInput3" placeholder=""></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput4" className="form-label">Enter month</label>
  <input type="text" className="form-control" id="formGroupExampleInput4" placeholder=""></input>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput5" className="form-label">Enter Year</label>
  <input type="text" className="form-control" id="formGroupExampleInput5" placeholder=""></input>
</div>

<button  className="btn btn-danger"  onChange={eventhandler}>Add</button>
</form>
    
</>
}

export default ExpenceForm;
export {user};