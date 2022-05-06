import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
     margin:0;
     padding: 0;
     box-sizing: border-box;
     outline: 0;
     font-family: "Tapestry";
 }
 
border-style, input, button{
    font-family: "Gothic";
    font-size: 1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: "Tapestry";
    font-weight: 700;
}
button{
    cursor:pointer;
}
a,li{
    text-decoration: none;
    list-style: none;
}
 `;
