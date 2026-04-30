import React from "react";
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Categories from "./Sidebar/Categories/Categories";
import Colors from "./Sidebar/Colors/Colors";
import Price from "./Sidebar/Price/Price";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input filter
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.input.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  //Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ),
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
