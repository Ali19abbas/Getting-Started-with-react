export default function ExColumns(props){
     let arr=[];
     for(let a in props){
      arr.push(props[a])
     }
     return <><ul className="list">
      {arr.map((x)=>(<li>{x}</li>))}
      </ul>
      </>
}