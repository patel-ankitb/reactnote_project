import React from 'react'
import { Link } from 'react-router-dom'

export const AmazonProduct = () => {
  var products = [
    {
      id: 104,
      name: "iphone15",
      price: 100000,
    },
    {
      id: 105,
      name: "iphone16",
      price: 200000,
    },
    {
      id: 106,
      name: "iphone17",
      price: 300000,
    },
  ];
  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "yellow",
        height: "600px",
        width: "100%",
      }}
    >
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{
            marginRight: "10px",
            height: "150px",
            marginTop: "50px",
            width: "200px",
            backgroundColor: "pink",
          }}
        >
          <h2>Product -- 1</h2>
          <Link style={{ color: "black" }} to="productdetail/101"> Detail---1</Link>
        </div>
        <div
          style={{
            marginRight: "10px",
            marginTop: "50px",
            height: "150px",
            width: "200px",
            backgroundColor: "pink",
          }}>
          <h2>Product -- 2</h2>
          <Link style={{ color: "black" }} to="productdetail/102"> Detail---2</Link>
        </div>
        <div
          style={{
            marginRight: "10px",
            height: "150px",
            marginTop: "50px",
            width: "200px",
            backgroundColor: "pink",
          }}>
          <h2>Product -- 3</h2>
          <Link style={{ color: "black" }} to="productdetail/103"> Detail---3</Link>
        </div>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        {products?.map((prod) => {
          return (
            <div
              style={{
                marginRight: "10px",
                height: "200px",
                width: "200px",
                backgroundColor: "red",
                marginTop:"50px"
              }}
            >
              <h2>{prod.name}</h2>
              <p>Rs {prod.price}</p>
              {/* <Link style={{ color: "black" }} to="/productdetail/101">
                DETAIL product 1
              </Link> */}
              <Link style={{ color: "black" }} to={`productdetail/${prod.id}`}> Detail --  {prod.id}</Link>
            </div>
          );
        })}
      </div>
    </div>

  )
}
