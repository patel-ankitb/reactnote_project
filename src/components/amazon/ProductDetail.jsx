import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const id = useParams().id;
  return (
    <div
    style={{
        marginTop:"100px",
        backgroundColor:"yellow",
        height:"150px",
        width:"100%"
    }}>
        <h1>Product detail of - {id}</h1>
    </div>
  )
}
