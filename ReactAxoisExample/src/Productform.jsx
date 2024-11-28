//import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRef } from "react";
import { saveProduct } from "./saveProduct";

function Productform() {
  const nameRef = useRef();
  const priceRef = useRef();
  const quanRef = useRef();
  const catRef = useRef();
  const imgRef = useRef();


const handleSubmit = async (e)=>{
    e.preventDefault();
    const jsonpayload = {
      name : nameRef.current.value,
      quantity : parseInt(quanRef.current.value,10),
      price : parseFloat(priceRef.current.value),
      category : catRef.current.value,
      image : imgRef.current.files[0].name
    }

    saveProduct(jsonpayload);
}


  return (
    <div>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Enter Product Name:</label>
          <input type="text" ref={nameRef} required/>
          <br/><br/>
          <label>Enter Product Price:</label>
          <input type="number" ref={priceRef} required/>
          <br/><br/>
          <label>Enter Product Quantity:</label>
          <input type="number" ref={quanRef} required/>
          <br/><br/>
          <label>Enter Product category:</label>
          <input type="text" ref={catRef} required/>
          <br/><br/>
          <label>Enter Product Image:</label>
          <input type="file" ref={imgRef} required/>
          <br/><br/>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Productform
