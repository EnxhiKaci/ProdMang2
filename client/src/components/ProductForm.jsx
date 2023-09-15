import React, { useState } from "react";
import axios from 'axios';


const ProductForm = (props) => {
  const { products, setProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title" // Add the id attribute
          name="title" // Add the name attribute
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          id="price" 
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description" 
          name="description" 
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default ProductForm;
