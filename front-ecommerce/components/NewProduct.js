import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const Title = styled.h3`
    font-size: 2rem;
`;


export default function NewProducts({newProducts}) {
    return (

            <Center>
            <Title>New Products</Title>
            <ProductsGrid>
                {newProducts.map(product => (
                    <ProductBox key={product._id} {...product} />
                ))}
            </ProductsGrid>
            </Center>

    )
}   