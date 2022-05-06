import { GlobalStyle } from "./styles/global";
import { CatalogueProvider } from "./providers/products";
import { CartProvider } from "./providers/cart";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Product from "./components/Product";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CatalogueProvider>
        <CartProvider>
          <div>
            <Header />
          </div>
          <>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Product type={"catalogue"} />}
              />
              <Route
                exact
                path="/cart"
                component={() => <Cart type={"cart"} />}
              />
            </Switch>
          </>
        </CartProvider>
      </CatalogueProvider>
    </>
  );
}

export default App;
