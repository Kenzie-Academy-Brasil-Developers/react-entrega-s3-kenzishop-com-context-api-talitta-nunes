
import { useCart } from "../../providers/cart";
import ButtonComp from "../ButtonComp";

const Button = ({ type, item, isDeleted = false }) => {
  const { addCart, delCart } = useCart();

  const text =
    type === "catalogue"
      ? "Adicionar item ao carrinho"
      : "Remover item do carrinho";

  const handleClick = () => {
    if (type === "catalogue") {
      addCart(item);
    } else {
      delCart(item);
    }
  };

  return isDeleted ? (
    <ButtonComp buttonSchema="pinkButton" onClick={handleClick}>
      {text}
    </ButtonComp>
  ) : (
    <ButtonComp buttonSchema="blueButton" onClick={handleClick}>
      {text}
    </ButtonComp>
  );
};

export default Button;
//return <ButtonComp onClick={handleClick}>{text}</ButtonComp>;
