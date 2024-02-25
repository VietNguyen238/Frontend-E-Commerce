import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategogy from "./Pages/ShopCategogy";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Shop /> } />
          <Route path="/mens" element={ <ShopCategogy banner={ men_banner } category="men" /> } />
          <Route path="/womens" element={ <ShopCategogy banner={ women_banner } category="women" /> } />
          <Route path="/kids" element={ <ShopCategogy banner={ kids_banner } category="kid" /> } />
          <Route path="/product" element={ <Product /> }>
            <Route path=":productId" element={ <Product /> } />
          </Route>
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/login" element={ <LoginSingup /> } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
