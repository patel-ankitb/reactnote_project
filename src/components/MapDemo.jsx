import React from 'react'

export const MapDemo = ({title}) => {
    var students = [
        {
            id:1,
            name:"dev",
            age:23
        },
        {
            id:2,
            name:"parth",
            age:25
        },
        {
            id:3,
            name:"ankit",
            age:26
        }
    ]
    return (
    <div>
        {title}
        <h1 style={{textAlign:'center'}}>MapDemo</h1>
        <ul>
            {
                students.map((stu) =>{
                    return(
                        <li style={{color:stu.age>=25?"green":"red"}}> {stu.id} - {stu.name} - {stu.age}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
