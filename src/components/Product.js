import styled from "styled-components"

export default function Product(props){
    const {image, title, subtitle} = props

    return(
        <ProductSty>
        <img src={image} alt="img-product" />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div></div>
        </ProductSty>
    )
}

const ProductSty = styled.div`
    width: 200px;
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px lightgrey;
    margin:18px 18px 0 0 ;
    background: white;
    border-radius: 10px;

    img{
        height:180px;
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

