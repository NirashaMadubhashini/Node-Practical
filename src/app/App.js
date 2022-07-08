import React from "react";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import DashBoard from "../pages/session/DashBoard";
import Customer from "../pages/session/Customer";
import Item from "../pages/session/Item";


function App() {
  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='item' element={<Item/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

  );
}

export default App;
