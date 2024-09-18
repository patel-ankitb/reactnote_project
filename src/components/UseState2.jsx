import React,{useState} from 'react'

export const UseState2 = () => {

    const [user, setuser] = useState([
        {
            id:1,
            name:"ankit",
            age:22
        },
        {
            id:2,
            name:"dev",
            age:21
        },
        {
            id:3,
            name:"vidhi",
            age:23
        }
    ])
    const adduser =()=>{
        var obj ={
            id :4,
            name:"nilay",
            age:25
        }
        setuser([...user,obj])
    }
  return (
    <div>
        <button onClick={()=>{adduser()}}adduser></button>
       <ul>
        {
            user.map((user)=>{
                return(
                    <li>{user.id}---{user.name}---{user.age}</li>
                )
            })
        }
       </ul>
    </div>
  )
}
