import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AuthContext } from "../contexts/auth.js";

export function Product(props) {
  const { image, title, subtitle, price } = props;
  const [itemCounter, setItemCounter] = useState(0);
  const { tempCart, setTempCart } = React.useContext(AuthContext);

  function addProduct(image, title, price) {
    setItemCounter(itemCounter + 1);

    const exists = (element) => element.title === title;

    if (tempCart.length > 0 && tempCart.some(exists)) {
      setTempCart(
        tempCart.map((obj) => {
          if (obj.title === title) {
            return { ...obj, qt: obj.qt + 1 };
          }

          return obj;
        })
      );
    } else {
      setTempCart([
        ...tempCart,
        {
          image: image,
          title: title,
          price: price,
          qt: 1,
        },
      ]);
    }
  }

  return (
    <ProductSty>
      {itemCounter !== 0 ? <div className="counter">{itemCounter}</div> : ""}
      <img src={image} alt="img-product" />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h5>R$ {price}</h5>
      <button onClick={() => addProduct(image, title, price)}>+</button>
    </ProductSty>
  );
}

const ProductSty = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 1px lightgrey;
  margin: 18px 18px 0 0;
  background: white;
  border-radius: 10px;

  img {
    object-fit: contain;
    height: 180px;
    margin-top: 10px;
  }

  h3 {
    text-align: center;
    font-size: 26px;
    font-weight: 700;
  }

  h4 {
    text-align: center;
    font-size: 22px;
    color: grey;
    margin-bottom: 5px;
  }

  h5 {
    text-align: center;
    font-size: 23px;
    color: black;
    margin-bottom: 5px;
  }

  button {
    background-color: #404eed;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    margin: 4px;
    cursor: pointer;
    border: none;
  }

  .counter {
    position: absolute;
    display: flex;
    width: 20px;
    border-radius: 10px;
    background-color: orangered;
    color: white;
    font-size: 22px;
    justify-content: center;
    align-items: center;
    margin-left: 190px;
    margin-bottom: 295px;
    font-weight: 700;
  }
`;
