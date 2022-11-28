import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/auth";

export default function CartList(props) {
  const { tempCart, setTempCart } = useContext(AuthContext);
  const { image, title, price, qt } = props;

  function quantityPlus(title, qt) {
    const exists = (element) => element.title === title;

    if (tempCart.some(exists)) {
      setTempCart(
        tempCart.map((obj) => {
          if (obj.title === title) {
            return { ...obj, qt: qt + 1 };
          }
          return obj;
        })
      );
    }
  }

  function quantityMinus(title, qt) {
    const exists = (element) => element.title === title;

    if (tempCart.some(exists) && qt > 1) {
      setTempCart(
        tempCart.map((obj) => {
          if (obj.title === title) {
            return { ...obj, qt: qt - 1 };
          }
          return obj;
        })
      );
    }
  }

  function deleteProduct(title) {
    setTempCart(tempCart.filter((item) => item.title !== title));
  }

  return (
    <ContainerItem>
      <img src={image} alt="img-product" />
      <h1>{title}</h1>
      <ContChanges>
        <ion-icon
          name="trash-outline"
          onClick={() => deleteProduct(title)}
        ></ion-icon>
        <CountSty>
          <button onClick={() => quantityMinus(title, qt)}>-</button>
          <h2>{qt}</h2>
          <button onClick={() => quantityPlus(title, qt)}>+</button>
        </CountSty>
        <h3>R${price}</h3>
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
    width: 70px;
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
