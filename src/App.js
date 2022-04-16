import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import app from "./firebase.init";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {

  return (
    <div className="text-center">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
