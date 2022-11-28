import Navbar from "../components/Navbar.js";
import styled from "styled-components";
import CartList from "../components/CartItens.js";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth.js";
import axios from "axios";

export default function Cart() {
  let soma = 0;
  const { tempCart, setTempCart } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const { email, name } = user.userData;
  const [sale, setSale] = useState({
    address: "",
    number: "",
    cep: "",
    city: "",
    state: "",
  });

  for (let i = 0; i < tempCart.length; i++) {
    let value = tempCart[i].price.replace(",", ".");
    soma += value * tempCart[i].qt;
  }

  let total = soma.toFixed(2);
  let valueTotal = total.replace(".", ",");

  function finishOrder(
    event,
    valueTotal,
    tempCart,
    sale,
    email,
    name,
    setTempCart,
    setSale
  ) {
    event.preventDefault();
    let arrayCart = tempCart.concat({ totalPrice: valueTotal });
    const formatData = { orderCart: arrayCart };
    let purchaseOrder = Object.assign(formatData, {
      dataAddress: sale,
      user: { email, name },
    });
    const verify = purchaseOrder.dataAddress;
    console.log(arrayCart);

    if (arrayCart[0].totalPrice === "0,00") {
      alert("Coloque produto no carrinho! ");
    } else if (
      verify.address === "" ||
      verify.number === "" ||
      verify.cep === "" ||
      verify.city === "" ||
      verify.state === ""
    ) {
      alert("Digite todos os campos");
    } else {
      axios
        .post(`http://localhost:5000/cart`, purchaseOrder)
        .then((res) => {
          alert("Compra feita com sucesso!");
          setTempCart([]);
          setSale({ address: "", number: "", cep: "", city: "", state: "" });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }

  return (
    <>
      <Navbar />
      <ProdDataSty>
        <ProdSty>
          {tempCart.map((d, id) => (
            <CartList
              key={id}
              image={d.image}
              title={d.title}
              price={d.price}
              qt={d.qt}
            />
          ))}
        </ProdSty>
        <ContainerData>
          <div>
            <input
              name="address"
              type="text"
              placeholder="Endereço"
              onChange={(address) =>
                setSale({ ...sale, address: address.target.value })
              }
              value={sale.address}
            />
            <input
              name="number"
              type="number"
              placeholder="Número"
              onChange={(number) =>
                setSale({ ...sale, number: number.target.value })
              }
              value={sale.number}
            />
            <input
              name="cep"
              type="number"
              placeholder="CEP"
              onChange={(cep) => setSale({ ...sale, cep: cep.target.value })}
              value={sale.cep}
            />
            <input
              name="city"
              type="text"
              placeholder="Cidade"
              onChange={(city) => setSale({ ...sale, city: city.target.value })}
              value={sale.city}
            />
            <input
              name="state"
              type="text"
              placeholder="Estado"
              onChange={(state) =>
                setSale({ ...sale, state: state.target.value })
              }
              value={sale.state}
            />
            <h1>Valor Total: R${valueTotal}</h1>
            <button
              onClick={(event) =>
                finishOrder(
                  event,
                  valueTotal,
                  tempCart,
                  sale,
                  email,
                  name,
                  setTempCart,
                  setSale
                )
              }
            >
              Finalizar Compra
            </button>
          </div>
        </ContainerData>
      </ProdDataSty>
    </>
  );
}

const ProdDataSty = styled.div`
  margin: 89px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;

const ProdSty = styled.div`
  width: 450px;
  height: 500px;
  background: #add8e6;
  margin-right: 50px;
  border-radius: 20px;
  overflow: auto;
`;

const ContainerData = styled.div`
  div {
    width: 400px;
    height: 300px;
    background-color: #add8e6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 5px;
  }

  input {
    width: 250px;
  }

  h1 {
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 25px;
  }

  button {
    width: 150px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background: #404eed;
    color: white;
    font-family: "Nerko One";
    font-size: 17px;
  }
`;
