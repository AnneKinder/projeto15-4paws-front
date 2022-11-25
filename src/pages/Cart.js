import NavbarSty from "../components/Navbar.js";
import styled from "styled-components";
import CartList from "../components/CartItens.js";
import { useState } from "react";

export default function Cart() {
  const itensCart = [
    {
      image: "https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc",
      title: "Ração Royal Canin",
      price: "2.00",
    },
    {
      image: "https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc",
      title: "Ração Royal Canin",
      price: "00.00",
    },
    {
      image: "https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc",
      title: "Ração Royal Canin",
      price: "00.00",
    },
    {
      image: "https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc",
      title: "Ração Royal Canin",
      price: "00.00",
    },
    {
      image: "https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc",
      title: "Ração Royal Canin",
      price: "00.00",
    },
  ];
  const [sale, setSale] = useState({
    address: "",
    number: "",
    cep: "",
    city: "",
    state: "",
  });
  console.log(sale);

  return (
    <>
      <NavbarSty />
      <ProdDataSty>
        <ProdSty>
          {itensCart.map((d) => (
            <CartList image={d.image} title={d.title} price={d.price} />
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
              <h1>Valor Total: R$000.00</h1>
              <button>Finalizar Compra</button>
            </form>
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
`;
