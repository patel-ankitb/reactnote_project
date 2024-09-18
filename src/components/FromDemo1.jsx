import React ,{useState} from 'react'

export const FromDemo1 = () => {
""
    const [name, setname] = useState("")
    const [age, setage] = useState(0)

    const submitHandler = () =>{
        alert(`name is ${name} age=${age}`);
    }
    const namehandler = (event) =>{
        console.log(event.target.value)
        setname(event.target.value)
    }
  return (
    <div>
        <h1>From---Demo1</h1>
        <div>
            <div>
                <label>Name : </label>
                <input onChange={(event)=>{namehandler(event)}} type="text" placeholder='Enter the name' />
                {name}
            </div><br/>
            <div>
                <label>Age : </label>
                <input onChange={(event)=>{setage(event.target.value)}} type="number" placeholder='Enter the age' />
            </div><brx/>
            <div>
                <button onClick={()=>{submitHandler()}}>Submit</button>
            </div>
        </div>
    
    </div>
  )
}
