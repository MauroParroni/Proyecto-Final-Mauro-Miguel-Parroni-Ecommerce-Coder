import "./App.css";
import NavBar from "./components/NavbarComponent/NavBarComponent";
import ItemListContainer from "./components/itemListComponent/itemListComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailComponent from "./components/itemDetailContainer/itemDetailContainer";
import CartContainer from "./components/cartContainer/cartContainer";
import OrderConfirm from "./orderConfirm/orderConfirm";
import { CartContextProvider } from "./context/cartContext";
import CheckoutComponent from "./components/checkoutComponent/checkoutComponent";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={< ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={< ItemListContainer/>}/>
        <Route path="*" element={ <h1> Page not found: 404 </h1>}/>
        <Route path="/product/:id" element={<ItemDetailComponent />}/>
        <Route path="/cart" element={<CartContainer />}/>
        <Route path="/order-confirmation/:id" element={<OrderConfirm />}/>
        <Route path="/checkout" element={<CheckoutComponent />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

