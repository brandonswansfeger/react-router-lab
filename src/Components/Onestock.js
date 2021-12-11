import React from "react";
import { Link } from "react-router-dom";

const Onestock = (props) => {
  return (
  <div>
    <Link to={`/stocks/${props.symbol}`}>{props.name}</Link>
</div>
)
};

export default Onestock;