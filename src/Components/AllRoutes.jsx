import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart"

// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
