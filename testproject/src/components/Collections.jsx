import React from "react";
import { Link } from "react-router-dom";

const Productcard = (props) => {
  const buynowbtn = (ev) => {
    console.log("button pressed");
    console.log(props.productname);
  };
  return (
    <>
      <div className="productcard">
        <div className="productcard-img">
          <img src={props.img} alt="" class="product-pic" />
        </div>
        <div className="productcard-desc">
          <h4 className="productcard-name">{props.productname}</h4>
          <div className="productcard-price">
            <span className="before">{props.cutprice}</span>
            <span className="current">{props.price}</span>
          </div>
          <button>
            <Link
              to={`/collections/productpage/${props.productname}`}
              onClick={buynowbtn}
            >
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

const Collections = () => {
  return (
    <>
      <div class="section-similarproducts-heading">
        <h3>Our Products</h3>
        <hr />
      </div>
      <div class="section-similarproducts">
        <div class="section-similarproducts-div">
          <Productcard
            img={require("../assets/tee-mockup(no_bg).png")}
            productname={"Product-1"}
            cutprice={"599"}
            price={"499"}
          />
          <Productcard
            img={require("../assets/tee-mockup(no_bg).png")}
            productname={"Product-2"}
            cutprice={"599"}
            price={"499"}
          />
          <Productcard
            img={require("../assets/tee-mockup(no_bg).png")}
            productname={"Product-3"}
            cutprice={"599"}
            price={"499"}
          />
          <Productcard
            img={require("../assets/tee-mockup(no_bg).png")}
            productname={"Product-4"}
            cutprice={"599"}
            price={"499"}
          />
        </div>
      </div>
    </>
  );
};

export default Collections;
