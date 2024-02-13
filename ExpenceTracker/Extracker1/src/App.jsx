import Comp1 from "./Comp1";
import ExColumns from "./Excolumns";
function App(){
   const dummyData=[
    {
     id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpence: "Lucknow",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { 
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpence: "Lucknow"
    },
    {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpence: "Lucknow"
     },
     ]
  return <>
     <Comp1/>
     <ExColumns title={dummyData[0].title} amount={dummyData[0].amount} date={dummyData[0].date.toISOString()} location={dummyData[0].locationOfExpence} > </ExColumns>
     </>

}

export default App;