import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/paw.print.webp";

export default function SignUp() {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmp: "",
  });

  function sendData(e) {
    e.preventDefault();

    if (form.password !== form.confirmp) {
      alert("As senhas não conferem. Por favor, redigite.");
    } else {
      alert("Usuário criado :)");

      axios
        .post("http://localhost:5000/sign-up", form)
        .then((res) => {
          alert("Usuário criado");
          navigate("/");
        })
        .catch((err) => alert(err.response.data));
    }
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <ScreenSty>
      <SignUpSty>
        <h1>4PAWS</h1>
        <form onSubmit={sendData}>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            required
            onChange={handleForm}
            value={form.name}
          />

          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={handleForm}
            value={form.email}
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            required
            onChange={handleForm}
            value={form.password}
          />

          <input
            name="confirmp"
            type="password"
            placeholder="Confirme a senha"
            required
            onChange={handleForm}
            value={form.confirmp}
          />
          <button type="submit"> Cadastrar </button>
        </form>
        <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
      </SignUpSty>
      <SidebarSty>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </SidebarSty>
    </ScreenSty>
  );
}

const ScreenSty = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
`;

const SidebarSty = styled.div`
  width: 50vw;
  height: 100vw;
  background-color: #404eed;
  display: flex;
  justify-content: center;

  img {
    height: 400px;
    margin-top: 11vw;
  }
`;

const SignUpSty = styled.div`
  margin-top: 10vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  padding: 50px 0 100px 0;

  h1 {
    font-family: "Nerko One";
    font-weight: 400;
    font-size: 55px;
    line-height: 39px;
    color: black;
    margin-bottom: 3vw;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 303px;
    height: 45px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    padding: 10px;
    margin-bottom: 8px;
  }

  button {
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    background: #404eed;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: #52b6ff solid 1px;
    color: #ffffff;
  }

  p {
    margin-top: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: none;
    color: #404eed;
  }
`;
