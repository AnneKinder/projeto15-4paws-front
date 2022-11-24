import styled from "styled-components";

export default function CartList(props) {
  const { image, title, price } = props;

  return (
    <ContainerItem>
      <img src={image} alt="img-product" />
      <h1>{title}</h1>
      <ContChanges>
        <div>
          <button>-</button>
          <h2>00</h2>
          <button>+</button>
        </div>
        <h3>R${price}</h3>
      </ContChanges>
    </ContainerItem>
  );
}

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
