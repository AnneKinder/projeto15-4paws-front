import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import {Product} from "../components/Product.js";
import { useState, useEffect } from 'react';
import axios from 'axios'
import { AuthContext } from "../contexts/auth.js";
import React from "react";


export default function Home() {
  const {tempCart } = React.useContext(AuthContext); 

  const [dogArray, setDogArray] = useState([])
  const [catArray, setCatArray] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/home", 
      // config
      )
      .then((res) => {
        setDogArray(res.data.dogProds);
        setCatArray(res.data.catProds);

      })
      .catch((err) => console.log(err.response.data));
  }, []);


  return (
    <>
      <Navbar />
      <HomeSty>
        <GoCart onClick={()=>console.log(tempCart)}>COMPRAR!</GoCart>
        <div className="subtitle">
          <h2> Doguinhos </h2>
        </div>
        <ListSty>
          {dogArray.map((d,id) => <Product key={id} image={d.image} title={d.title} subtitle={d.subtitle} price={d.price}/>
          )}
        </ListSty>
        <div className="subtitle">
          <h2> Gatinhos </h2>
        </div>
        <ListSty>
          {catArray.map((c,id) => <Product key={id} image={c.image} title={c.title} subtitle={c.subtitle} price={c.price}/>
          )}
        </ListSty>
        
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

  .subtitle {
    width: 1000px;
  }

  h2 {
    font-size: 38px;
  }

`;

const ListSty = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom:30px;
`;

const GoCart = styled.div`
  background-color: #404eed;
  height: 100px;
  width:100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top:120px;
  right:50px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  border: 5px #27AAE1 solid;
  cursor: pointer;
`