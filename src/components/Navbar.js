import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavbarSty>
      <div className="left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/154/183/non_2x/animal-paw-print-icon-sign-design-free-png.png"
          alt="logo"
        />
        <p>4PAWS</p>
      </div>
      <div className="right">
        <Link to="/home">
          <ion-icon name="home"></ion-icon>
        </Link>
        <Link to="/cart">
          <ion-icon name="cart"></ion-icon>
        </Link>
        <Link to="/">
          <ion-icon name="power"></ion-icon>
        </Link>
      </div>
    </NavbarSty>
  );
}

const NavbarSty = styled.div`
  width: 100vw;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #404eed;
  font-family: "Nerko One";
  font-weight: 400;
  font-size: 42px;
  line-height: 39px;
  color: #fcfcfc;
  z-index: 1;
  
  img {
    height: 65px;
    width: 65px;
    background-color: #404eed;
    margin-right: 17px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    width: 140px;
    justify-content: space-between;
    font-size: 35px;
  }

  ion-icon {
    color: white;
  }
`;
