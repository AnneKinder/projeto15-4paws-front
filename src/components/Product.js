import React from "react";
import styled from "styled-components"
import { useState } from "react";


export default function Product(props){
    const {image, title, subtitle} = props

    const [itemCounter, setItemCounter] = useState(0)

    function addProduct(){
        setItemCounter(itemCounter+1)
    }


    return(
        <ProductSty>
            {itemCounter!=0 ? <div className="counter">{itemCounter}</div> : ""}
            <img src={image} alt="img-product" />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <button onClick={() => addProduct()}>+</button>
        </ProductSty>
    )
}

const ProductSty = styled.div`
    box-sizing: border-box;
    width: 200px;
    height:280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px lightgrey;
    margin:18px 18px 0 0 ;
    background: white;
    border-radius: 10px;

    img{
        object-fit: contain;
        height:180px;
        margin-top: 10px;
    
    }

    h3{
        text-align: center;
        font-size: 26px;
        font-weight: 700;
    }

    h4{
        text-align: center;
        font-size: 22px;
        color: grey;
        margin-bottom: 5px;
    }

    button{
        background-color: #404eed;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin: 4px;
    }


    .counter{
        display: flex;
        width: 20px;
        border-radius: 10px;
        background-color: orangered;
        color: white;
        font-size: 22px;
        justify-content: center;
        align-items: center;
        margin-left: 178px;
        font-weight: 700;
    }

`

