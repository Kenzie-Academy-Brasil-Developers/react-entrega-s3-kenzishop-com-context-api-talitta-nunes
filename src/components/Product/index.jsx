//import { useContext } from "react";

import { useCatalogue } from "../../providers/products";
import { Container, ContainerUl, Quadro } from "./styles";
import Button from "../Button";
const Product = ({ type }) => {
  const { catalogue, index } = useCatalogue();
  return (
    <Quadro>
      <h1> Apenas o melhor para sua coleção! </h1>
      <Container>
        {catalogue.map((item) => (
          <ContainerUl key={index}>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p>R$: {item.price.toFixed(2)}</p>
            <Button isDeleted item={item} type={type} />
          </ContainerUl>
        ))}
      </Container>
    </Quadro>
  );
};
export default Product;
