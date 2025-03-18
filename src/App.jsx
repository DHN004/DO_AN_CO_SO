import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import Discount from "./pages/Discount";
import Parent from "./pages/Parent";
import Store from "./pages/Store";
import BrandStory from "./pages/BrandStory";
import Care from "./pages/Care";
import BestSeller from "./pages/BestSeller";
import Drink from "./pages/Drink";
import Rice from "./pages/Rice";
import Set from "./pages/Set";
import Value from "./pages/Value";
import ChickenSet from "./pages/ChickenSet";
import Combo from "./pages/Combo";
import Chicken from "./pages/Chicken";
import Burger from "./pages/Burger";
import Product from "./pages/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Searchbar from "./components/SearchBar/Searchbar";
import NextStep from "./pages/NextStep";
import DiscountDetail from "./pages/DiscountDetail";
import ShopContextProvider from './Context/ShopContext.jsx'

function App() {
  const location = useLocation();

  return (
    
    <ShopContextProvider>
    <div style={{ width: "100%" }}>
      


  <ToastContainer autoClose={1000} />
  
  {location.pathname !== "/login" && (
    <>
      <NavBar />
      <Searchbar />
    </>
  )}

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/bestSeller" element={<BestSeller />} />
    <Route path="/product/:productId" element={<Product />} />
    <Route path="/discount" element={<Discount />} />
    <Route path="/discount/:blogId" element={<DiscountDetail />} />
    <Route path="/store" element={<Store />} />
    <Route path="/drink" element={<Drink />} />
    <Route path="/rice" element={<Rice />} />
    <Route path="/set" element={<Set />} />
    <Route path="/chickenSet" element={<ChickenSet />} />
    <Route path="/combo" element={<Combo />} />
    <Route path="/value" element={<Value />} />
    <Route path="/chicken" element={<Chicken />} />
    <Route path="/burger" element={<Burger />} />
    <Route path="/next_step" element={<NextStep />} />
    <Route path="/parent" element={<Parent />} />
    <Route path="/brandStory" element={<BrandStory />} />
    <Route path="/care" element={<Care />} />
  </Routes>



    </div>
    </ShopContextProvider>
  
  );
}

export default App;
