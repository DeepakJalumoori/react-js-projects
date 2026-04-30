import React from "react";
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input filter
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
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
    const normalizedSelected = selected
      ? selected.toString().toLowerCase()
      : "";

    //Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category.toLowerCase() === normalizedSelected ||
          color.toLowerCase() === normalizedSelected ||
          company.toLowerCase() === normalizedSelected ||
          newPrice.toLowerCase() === normalizedSelected ||
          title.toLowerCase() === normalizedSelected,
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={`${title}-${index}`}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
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
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
