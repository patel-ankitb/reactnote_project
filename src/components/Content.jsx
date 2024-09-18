import React from 'react'


export const Content = () => {
    var username = "ankit";

    const contentStyle = {
        backgroundColor: "yellow",
      }
  return (
    <div style={contentStyle}>
        <h1> Content</h1>
        <h1>hello all !!</h1>
      <h4>{username} </h4>
    </div>
  )
}
