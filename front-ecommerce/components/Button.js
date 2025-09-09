import styled, { css } from "styled-components"

const StyledButton = styled.button`
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  display: inline-flex;
  svg {
    height: 1.2em;
    margin-right: 5px;
    width: 1.2em;
  }
  ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000
  `}
  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${props => props.primary && css`
    background-color: #5542F6;
    color: #fff;
    border: 1px solid #5542F6;


  `}
  ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg {
      height: 20px;
    }
  `}

  &:hover {
    background-color: #005bb5;
  }
`;

export default function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}