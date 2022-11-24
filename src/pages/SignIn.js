import styled from "styled-components";
import logo from "../assets/paw.print.webp";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <ScreenSty>
      <SignInSty>
        <h1>4PAWS</h1>
        <form>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Senha" required />
          <button type="submit"> Cadastrar </button>
        </form>
        <p onClick={() => navigate("/sign-up")}>
          Já tem uma conta? Entre agora!
        </p>
      </SignInSty>
      <SidebarSty>
        <img src={logo} alt="logo" />
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

const SignInSty = styled.div`
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
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: none;
    color: #404eed;
  }
`;
