
import AppData from "./Appdata";

import './App.css'
import ExpenceForm from "./ExpenceForm";
import user from "./ExpenceForm"
 ExpenceForm


function App(){
   const dummyData=[
    {
     id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpence: "Lucknow",
    month : "JUNE",
    day:    "WEDNESDAY",
    time:   "10-30 Am"
    },
    { 
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpence: "Lucknow",
    month : "July",
    day:    "Saturday",
    time:   "11-38 Am"
    },
    {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    month : "SEPTEMBER",
    day:    "Friday",
    time:   "10-39 Am",
    locationOfExpence: "Lucknow"
     },
     ]
  return <div className="box">
        <ExpenceForm/>
      <h1>EXPENCES</h1>
       {dummyData.map((x)=>(
         <AppData title={x.title} amount={x.amount}   month={x.month} day={x.day}  time={x.time}/>

       ))}
     </div>

}

export default App;


/*<div ><AppData title={dummyData[0].title} amount={dummyData[0].amount} date={dummyData[0].date.toISOString()}  month={dummyData[0].month} day={dummyData[0].day}  time={dummyData[0].time}/>
     
     
     <AppData title={dummyData[1].title} amount={dummyData[1].amount} date={dummyData[1].date.toISOString()}  month={dummyData[1].month} day={dummyData[1].day}  time={dummyData[1].time}/>
     
     <AppData title={dummyData[2].title} amount={dummyData[2].amount}   month={dummyData[2].month} day={dummyData[2].day}  time={dummyData[2].time}/></div>
     */