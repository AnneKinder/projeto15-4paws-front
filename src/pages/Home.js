import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Product from "../components/Product.js";

export default function Home() {
    
  const dogArray = [
    {
      image:
        "https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/thumbs/racao-guabi-natural-para-caes-adultos-racas-medias-sabor-frango-e-arroz-12kg-1kg-gratis-63766fbaa1ce1.jpg",
      title: "Ração Royal Canin",
      subtitle: "+ light",
    },
    {
      image:
        "https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/thumbs/comedouro-funcional-dog-lento-250ml-9962.png",
      title: "Pote alto",
      subtitle: "+ ergonomia",
    },
  ];

  const catArray = [
    {
      image:
        "https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/thumbs/arranhador-poste-sisal-grande-unipet-8245.jpg",
      title: "Arranhador",
      subtitle: "cizal",
    },
    {
      image:
        "https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/thumbs/brinquedo-varinha-pesca-gatinho-catmypet-10736.jpg",
      title: "Varinha com pena",
      subtitle: "diversão garantida",
    },
  ];

  return (
    <>
      <Navbar />
      <HomeSty>
        <div className="subtitle">
          <h2> Doguinhos </h2>
        </div>
        <ListSty>
          {dogArray.map((d) => <Product image={d.image} title={d.title} subtitle={d.subtitle} />
          )}
        </ListSty>
        <div className="subtitle">
          <h2> Gatinhos </h2>
        </div>
        <ListSty>
          {catArray.map((d) => <Product image={d.image} title={d.title} subtitle={d.subtitle} />
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
  background-color: lightcyan;
  display: flex;
  flex-wrap: wrap;
`;
