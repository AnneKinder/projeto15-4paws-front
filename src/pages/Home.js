import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Product from "../components/Product.js";


export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSty>
        <div className="subtitle">
        <h2> Doguinhos </h2>
        </div>
            <ListSty>
                <Product />
            </ListSty>
        <div className="subtitle">
        <h2> Gatinhos </h2>
        </div>
        <ListSty>produto 2 de gato</ListSty>
      </HomeSty>
    </>
  );
}

const HomeSty = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


.subtitle{
    width: 1000px;
}


  h2 {
    font-size: 38px;
  }
`;

const ListSty = styled.div`
  width: 1000px;
  background-color: lightcyan;
`;
