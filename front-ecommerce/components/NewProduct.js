import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
// import Title from "./Title";

const Title = styled.h1`
color: #000;
font-weight: 500;
`



export default function NewProducts({products}) {
    return (

        <Center>
            <Title>New Products</Title>
            <ProductsGrid products={products} />
        </Center>

    )
}   