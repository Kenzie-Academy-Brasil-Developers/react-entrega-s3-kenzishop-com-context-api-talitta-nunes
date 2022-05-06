//import { useContext } from "react";
import { useCart } from "../../providers/cart";
import Button from "../Button";
import "./styles.css";

const Cart = ({ type }) => {
  const { cart, valor } = useCart();
  return (
    <div className="carrinho_geral">
      <div className="titulo">
        <h1>Seus pedidos</h1>
        <div className="total">
          {valor > 0 && <h2> Valor da compra: R${valor.toFixed(2)}</h2>}
          <h2>Total de itens : {cart.length}</h2>
        </div>
        <div className="carrinho_core">
          {cart.length === 0 ? (
            <h1> Ops...carrinho vazio!!</h1>
          ) : (
            cart.map((item, index) => (
              <>
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <h1>{item.name}</h1>
                  <p>R$ {item.price.toFixed(2)}</p>
                  <Button item={item} type={type} />
                </li>
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
