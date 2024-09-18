import React,{useState} from 'react'

export const UseState = () => {

    // var count =0;

    var  [count,setcount] = useState(0);
    const increcount = () => {
        // count ++;
        setcount(count+1);
        console.log("count --> " ,count)
    }
  return (

    <div>
        <h1>Use--State</h1>
        <h2>count = {count}</h2>
        <button onClick={()=>{increcount()}}>incre-count</button>
    </div>
  )
}
