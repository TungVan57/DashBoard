import { Button, Form, Input } from "antd";
import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  margin: 10rem auto;
  width: 20rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.09);
  border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:600px){
    font-size: 16px;
    width: 80vw;
    height: 60vh;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
  background: #fff;
  font-family: 'Source Serif Pro', serif;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width:600px){
    font-size: 4rem;
  }
`;
export const FormLogin = styled(Form)`
  background: transparent;
  width: 100%;
`;

export const LabelCustom = styled.h3`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.1rem;
  margin-top: 3rem;
  background: #fff;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width:600px){
    font-size: 1.5rem;
  }
`;

export const InputCustom = styled(Input)`
  background: transparent;
  border: transparent;
  border-bottom: 2px solid white;
  border-radius: 0px;
  color: #fff;
  font-size: 1.2rem;
  padding: 2px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 20px;
    background-color: green;
    top: 100%;
    right: 0;
    z-index: 1;
  }

  :hover {
    border-color:#fff;
  }

  :active {
  }

  :focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid white;
  }
`;

export const ButtonLogin = styled(Button)`
  border: none;
  margin-top: 3rem;
  width: 100%;
  height: auto;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  padding: 0.25rem 1.5rem;
  background:#1e3799;
  transition: 1s ease;
  border-radius: 1rem;

  &:hover {
    -webkit-background-clip: text;
    color: #fff !important;
    background:#4a69bd !important;
  }

  @media screen and (max-width:600px){
    font-size: 1rem;
    padding:1rem 2.5rem;
  }
`;

export const Circle = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props) => (props.pos === "top" ? "1rem" : "25rem")};
  left: ${(props) =>
    props.pos === "top"
      ? "calc((100vw - 20rem)/2 - 8rem)"
      : "calc((100vw - 20rem)/2 + 14rem)"};
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: ${(props) =>
    props.pos === "top" ? "rgb(221, 136, 17)" : "rgb(17,169,221)"};
  background: ${(props) =>
    props.pos === "top"
      ? "radial-gradient(circle,rgba(221, 136, 17, 1) 0%,rgba(205, 21, 21, 1) 36%)"
      : "radial-gradient(circle, rgba(17,169,221,1) 0%, rgba(21,56,205,1) 52%)"};
`;
