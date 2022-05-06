import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";
import ButtonComp from "../ButtonComp";

const Header = () => {
  const history = useHistory();
  const handleNavigationLogin = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1> Hocus Pocus Shop</h1>
      <div>
        <ButtonComp
          buttonSchema="purpleButton"
          onClick={() => handleNavigationLogin("/cart")}
          type="button"
        >
          <FaShoppingCart style={{ fontSize: 30 }} />
        </ButtonComp>
      </div>
      <div>
        <ButtonComp
          buttonSchema="purpleButton"
          type="button"
          onClick={() => handleNavigationLogin("/")}
        >
          <CgEnter style={{ fontSize: 30 }} />
        </ButtonComp>
      </div>
    </Container>
  );
};
export default Header;
