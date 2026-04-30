import React from "react";
import "./Categories.css";
import Input from "../../components/Input";

const Categories = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Categories;
