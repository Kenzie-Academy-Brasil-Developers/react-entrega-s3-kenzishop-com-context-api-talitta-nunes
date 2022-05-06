import styled, { css } from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Tapestry";
  height: 45px;
  border-radius: 8px;
  border: 2px solid transparent;
  margin: 0 auto;
  transition: 0.5s;
  :hover {
    border: 2px solid #f5f5f5;
    background-color: aliceblue;
    color: black;
  }

  ${(props) => {
    switch (props.buttonSchema) {
      case "purpleButton":
        return css`
          background-color: blueviolet;
          color: white;
          max-width: 150px;
          width: 100%;
          text-align: center;
        `;
      case "blueButton":
        return css`
          background-color: blue;
          color: white;
          max-width: 150px;
          width: 100%;
          text-align: center;
        `;
      case "pinkButton":
        return css`
          background-color: lightseagreen;
          color: white;
          max-width: 150px;
          width: 100%;
          text-align: center;
        `;

      default:
        return css`
          background-color: #212529;
          color: white;
          width: 100%;
          max-width: 80px;
          text-align: center;
        `;
    }
  }}
`;
