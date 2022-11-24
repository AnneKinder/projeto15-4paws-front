import styled from "styled-components"

export default function Product(props){


    
    return(
        <ProductSty>
        <img src="https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/thumbs/royal-canin-mini-starter-mother-babydog-1kg-6377788ec0c9d.jpg" alt="img-product" />
        <h3>Ração Royal Canin</h3>
        <h4>+ proteico</h4>
        </ProductSty>
    )
}

const ProductSty = styled.div`
    width: 200px;
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px lightgrey;
    margin:15px 15px 0 0 ;
    background: white;
    border-radius: 10px;

    img{
        height:170px;
    }

    h3{
        text-align: center;
        font-size: 26px;
        font-weight: 700;
    }

    h4{
        text-align: center;
        font-size: 22px;
        color: grey;
        margin-bottom: 5px;
    }


`

