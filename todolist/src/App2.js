import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [productdetails, setdetails] = useState({
    product_name: "",
    manufacturer: "",
    price: "",
  });

  const inputevent = (ev) => {
    const { name, value } = ev.target;
    setdetails((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const onsubmit = () => {
    setdetails(productdetails);
    console.log(productdetails);
    console.log("button clicked");
  };

  return (
    <div className="container form-group">
      {/* <form> */}
      <label>Product name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Product name"
        onChange={inputevent}
        name="product_name"
      />
      <label>Manufacturer</label>
      <input
        type="text"
        className="form-control"
        id="Manufacturer"
        name="manufacturer"
        placeholder="Enter Manufacturer name"
        onChange={inputevent}
      />
      <label>Price</label>
      <input
        type="number"
        className="form-control"
        name="price"
        id="Price"
        onChange={inputevent}
      />
      <button className="btn btn-primary m-3" onClick={onsubmit}>
        Submit
      </button>
      {/* </form> */}
    </div>
  );
}

export default App;
