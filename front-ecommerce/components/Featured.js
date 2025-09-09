import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`; 
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  line-height: 1.4;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
    gap: 10px;
    margin-top: 25px;
`

export default function Featured() {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>Pro Plan</Title>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Desc>
                            <ButtonWrapper>
                                <Button outline white size="l">
                                    Read More
                                </Button>
                                <Button primary size="l">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                    </svg>

                                    Add to cart
                                </Button>
                            </ButtonWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="Featured" />
                    </Column>

                </ColumnsWrapper>

            </Center>
        </Bg>
    );
}