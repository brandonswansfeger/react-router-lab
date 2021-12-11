import "./styles.css";
import React from "react";
//Import route and our components
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import About from "./pages/About";
import Stock from "./pages/Stock";
import { Routes } from "react-router";
import Nav from "./Components/Nav";

function App() {
return (
<div className="App">
  <Nav />
  <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/stocks/:symbol" element={<Stock/>} />
    <Route path="/Stocks" element={<Dashboard/>} />
 </Routes>
   </div>
  );
}
export default App;

