import React from "react";
import Input from "../../components/Input";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="price-title">Price</h2>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Price;
