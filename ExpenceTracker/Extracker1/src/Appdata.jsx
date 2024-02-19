import './expences.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function AppData(props){
    
      return (<div className="container cont">
        <div className="date">
            <h5>{props.month}</h5>
            <h6>{props.day}</h6>
            <h6>{props.time}</h6>
            
        </div>
     <h3>{props.title}</h3>
     <h3><span class="badge bg-secondary">{props.amount}</span></h3>
     <button className='btn btn-danger' onClick={()=>{alert("button clicked")}}>Detete</button>
</div>)
}