import React from "react";
import { useParams } from "react-router-dom";
function Productpage() {
  const { productname } = useParams();
  return (
    <div>
      <h1>this is product page {productname}</h1>
    </div>
  );
}

export default Productpage;
