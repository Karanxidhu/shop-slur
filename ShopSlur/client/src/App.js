import React from "react";
import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import ProductUpload from "./components/ProductUpload";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SellerDashboard from "./components/SellerDashboard";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/productpage/:id" element={<ProductPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/addproduct" element={<ProductUpload />} />
      <Route exact path="/sellerproducts" element={<SellerDashboard />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;