import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import User from "./User";
import NotFound404 from './NotFound404';
import Products from "./Products";
import Mobiles from "./Mobiles";
import Laptops from "./Laptops";

const MainRouter = () => {
  return (
    <>
      <h1>Learning React Router Dom</h1>
      <BrowserRouter>
        <Link to={"/"}>Home</Link> || <Link to={"/contact"}>Contact</Link> ||
        <Link to={"/about"}>About</Link> ||
        <Link to={"/user/10"}>Users</Link> ||
         <Link to={"/products"}>Products</Link>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/user/:id" element={<User/>} />
           <Route path="*" element={<NotFound404/>} />
           <Route path="/products" element = {<Products/>}>
           <Route path="mobiles" element = {<Mobiles/>}/>
           <Route path="laptops" element = {<Laptops/>}/>
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
