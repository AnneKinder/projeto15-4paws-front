import NavbarSty from "../components/Navbar.js";
import styled from "styled-components";

export default function Cart() {
  return (
    <>
      <NavbarSty />
      <ProdDataSty>
        <ProdSty>
          <ContainerItem>
            <img src="https://cf.shopee.com.br/file/d9f93981e1839c51ec55b3a6d05571fc" />
            <h1>hhhggggggggggggggggggggggggggggggghkjhkhkjhjkh</h1>
            <ContChanges>
              <div>
                <button>-</button>
                <h2>00</h2>
                <button>+</button>
              </div>
              <h3>R$00.00</h3>
            </ContChanges>
          </ContainerItem>
        </ProdSty>
        <ContainerData>
          <div>
            <form>
              <input name="address" type="text" placeholder="Endereço" required />
              <input name="number" type="number" placeholder="Número" required />
              <input name="cep" type="number" placeholder="CEP" required />
              <input name="city" type="text" placeholder="Cidade" required />
              <input name="state" type="text" placeholder="Estado" required />
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

const ContainerItem = styled.div`
  width: 400px;
  height: 100px;
  background-color: #ffffff;
  margin: 20px auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 90px;
    margin: 10px;
  }

  h1 {
    width: 170px;
    font-size: 22px;
    margin-right: 6px;
    word-wrap: break-word;
  }
`;

const ContChanges = styled.div`
  display: flex;
  flex-direction: column;

  div {
    padding-top: 15px;
    display: flex;
  }

  h2 {
    margin: 3px;
    font-size: 20px;
  }

  h3 {
    margin-top: 20px;
    font-size: 20px;
  }
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
