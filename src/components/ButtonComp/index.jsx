import { Container } from "./styles";

const ButtonComp = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ButtonComp;
