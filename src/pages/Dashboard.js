import React from "react";
import Onestock from "../Components/Onestock"
import stocks from "../stockdata"; 
console.log(Onestock);

export default function Dashboard() {
        const allstocks = stocks.map((ele, index) => (
          <Onestock key={index}{...ele} />
        ));
      
        return <div className="App">{allstocks}</div>;
      }