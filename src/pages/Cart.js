import Navbar from "../components/Navbar.js";
import styled from "styled-components";
import CartList from "../components/CartItens.js";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth.js";
import axios from "axios";

export default function Cart() {
  let soma = 0;
  const { tempCart } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [sale, setSale] = useState({
    address: "",
    number: "",
    cep: "",
    city: "",
    state: "",
  });

  for (let i = 0; i < tempCart.length; i++) {
    soma += tempCart[i].price * tempCart[i].qt;
  }
  let total = soma.toFixed(2);

  function finishOrder(total, tempCart, sale) {
    let arrayCart = tempCart.concat({ totalPrice: total });
    const formatData = { orderCart: arrayCart };
    let purchaseOrder = Object.assign(formatData, { data: sale });
    console.log(purchaseOrder);

    axios
      .post("http://localhost:5000/cart", purchaseOrder)
      .then((res) => {
        console.log("sucesso");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
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
            <form>
              <input
                name="address"
                type="text"
                placeholder="Endereço"
                required
                onChange={(address) =>
                  setSale({ ...sale, address: address.target.value })
                }
                value={sale.address}
              />
              <input
                name="number"
                type="number"
                placeholder="Número"
                required
                onChange={(number) =>
                  setSale({ ...sale, number: number.target.value })
                }
                value={sale.number}
              />
              <input
                name="cep"
                type="number"
                placeholder="CEP"
                required
                onChange={(cep) => setSale({ ...sale, cep: cep.target.value })}
                value={sale.cep}
              />
              <input
                name="city"
                type="text"
                placeholder="Cidade"
                required
                onChange={(city) =>
                  setSale({ ...sale, city: city.target.value })
                }
                value={sale.city}
              />
              <input
                name="state"
                type="text"
                placeholder="Estado"
                required
                onChange={(state) =>
                  setSale({ ...sale, state: state.target.value })
                }
                value={sale.state}
              />
              <h1>Valor Total: R${total}</h1>
            </form>
            <button onClick={() => finishOrder(total, tempCart, sale)}>
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
