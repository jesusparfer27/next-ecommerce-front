import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
  padding: 10px 20px;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  margin-left: 20px;
`;

const StyledNav = styled.nav`
  ul {
    display: flex;
    items-align: center;
    margin: 0;
    height: 100%;
    list-style: none;
    padding: 0;
  gap: 15px;
  }

  li {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export default function Header() {
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href="/">E-commerce</Logo>
                    <StyledNav>
                        <ul>
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/products">Products</NavLink></li>
                            <li><NavLink href="/categories">Categories</NavLink></li>
                            <li><NavLink href="/account">Account</NavLink></li>
                            <li><NavLink href="/cart">Cart (0)</NavLink></li>

                        </ul>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}