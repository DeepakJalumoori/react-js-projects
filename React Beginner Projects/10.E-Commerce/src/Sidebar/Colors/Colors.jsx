import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = () => {
  return (
    <div className="ml">
      <h2 className="color-title">Color</h2>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Colors;
