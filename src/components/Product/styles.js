import styled from "styled-components";

export const Quadro = styled.div`
  text-align: center;
  color: blue;
`;
export const Container = styled.ul`
  background-image: linear-gradient(90deg, #e0bbe4, #957dad, #d291bc);
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1097px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const ContainerUl = styled.li`
  background-color: pink;
  text-align: center;
  color: blue;
  display: flex;
  border: 5px solid hotpink;
  margin: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  list-style: none;
  flex-wrap: wrap;
  height: 100%;
  h1 {
    font-size: 20px;
    height: 40px;
    width: 250px;
    padding: 0;
    overflow: hidden;
    position: relative;
    display: inline-block;
    margin: 0 5px 0 5px;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    color: red;
    font-weight: bold;
    height: 45px;
  }
  button {
    font-size: large;
  }
  img {
    max-width: 250px;
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
