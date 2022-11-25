import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CartList(props) {
  const { image, title, price } = props;
  const [quantity, setQuantity] = useState(1);
  const [newPrice, setNewPrice] = useState(price);
  console.log(newPrice);

  function quantityMinus() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setNewPrice(newPrice - price);
    }
  }

  function quantityPlus() {
    setQuantity(quantity + 1);
    setNewPrice(newPrice + price);
  }

  return (
    <ContainerItem>
      <img src={image} alt="img-product" />
      <h1>{title}</h1>
      <ContChanges>
        <ion-icon name="trash-outline"></ion-icon>
        <CountSty>
          <button onClick={quantityMinus}>-</button>
          <h2>{quantity}</h2>
          <button onClick={quantityPlus}>+</button>
        </CountSty>
        <h3>R${newPrice.toFixed(2)}</h3>
      </ContChanges>
    </ContainerItem>
  );
}

const ContainerItem = styled.div`
  width: 420px;
  height: 120px;
  background-color: #ffffff;
  margin: 20px auto;
  border-radius: 5px;
  display: flex;
  align-items: center;

  img {
    height: 90px;
    margin: 10px;
    margin-right: 25px;
  }

  h1 {
    width: 180px;
    font-size: 22px;
    margin-right: 6px;
    text-align: justify;
    margin-right: 30px;
  }
`;

const ContChanges = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
    text-align: end;
  }

  ion-icon {
    margin-left: 55px;
    height: 20px;
    width: 20px;
    margin-bottom: 10px;
  }
`;

const CountSty = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 10px;

  button {
    height: 22px;
    width: 22px;
    font-size: 16px;
    font-weight: 700;
  }

  h2 {
    margin: 5px;
    font-size: 22px;
    font-weight: 500;
  }
`;
