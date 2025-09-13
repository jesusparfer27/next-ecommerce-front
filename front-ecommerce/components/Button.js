import { primary } from "@/lib/colors";
import styled, { css } from "styled-components"

export const ButtonStyle = css`
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  svg {
    height: 1.2em;
    margin-right: 5px;
    width: 1.2em;
  }
  ${props => props.block && css`
    display: block;
    width: 100%;
    `}
  ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}
  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${props => props.black && !props.outline && css`
    background-color: #000;
    color: #fff;
  `}
  ${props => props.black && props.outline && css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `}
  ${props => props.primary && !props.outline && css`
    background-color: ${primary};
    color: #fff;
    border: 1px solid ${primary};
  `}
    ${props => props.primary && props.outline && css`
    background-color: transparent;
    color: ${primary};
    border: 1px solid ${primary};
  `}
  ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg {
      height: 20px;
    }
  `}

  &:hover {
  }
`

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}