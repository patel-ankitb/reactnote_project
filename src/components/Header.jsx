import React from 'react'
import '../assest/css/Style.css'

export default function (props) {
  console.log("header...." ,props)
  return (
    <div className='header'>
        <h1>Header-{props.d.country}--{props.title}</h1>
        <button onClick={props.test}>Test</button>
    </div>
  )
}
