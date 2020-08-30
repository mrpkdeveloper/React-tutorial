import React from "react";
import "./Productpage.css";

const Productpage = () => {
  return (
    <>
      {/* <!------------------------------- product section --------------------------> */}
      <div class="section-productpage">
        {/* <!------------- product image section -------> */}
        <div class="productimagediv">
          <div class="product-image">
            <img
              src={require("../assets/tee-mockup(no_bg).png")}
              alt=""
              class="product-pic"
            />
            <div class="dots">
              <a href="#!" class="active">
                <i>1</i>
              </a>
              <a href="#!">
                <i>2</i>
              </a>
              <a href="#!">
                <i>3</i>
              </a>
              <a href="#!">
                <i>4</i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-------- product description section ----------> */}
        <div class="productdescriptiondiv">
          <div class="product-details">
            <header>
              <h1 class="title">Alien Black Fossil</h1>
              <span class="colorCat">Premium</span>
              <div class="price">
                <span class="before">₹599</span>
                <span class="current">₹499</span>
              </div>
              <div class="rate">
                <a href="#!" class="active">
                  ★
                </a>
                <a href="#!" class="active">
                  ★
                </a>
                <a href="#!" class="active">
                  ★
                </a>
                <a href="#!" class="active">
                  ★
                </a>
                <a href="#!">★</a>
              </div>
            </header>

            <div class="controls">
              <div class="color">
                <h5>color</h5>
                <ul>
                  <li>
                    <a href="#!" class="colors color-bdot4 active"></a>
                  </li>
                  <li>
                    <a href="#!" class="colors color-bdot5"></a>
                  </li>
                </ul>
              </div>
              <div class="size">
                <h5>size</h5>
                {/* <!-- <a href="#!" class="option">(UK 8)</a> --> */}
                <select class="option">
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
              </div>
              <div class="qty">
                <h5>qty</h5>
                {/* <!-- <a href="#!" class="option">(1)</a> --> */}
                <select class="option">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>
            </div>

            <div class="footerproduct">
              <button type="button">
                <span>Buy Now</span>
              </button>
            </div>
            <article>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul class="desclist">
                <li>Fit Type: Regular Fit</li>
                <li>
                  Care Instructions: Ensure washing the tee in normal water,
                  don't iron directly on the print.
                </li>
                <li>Finest quality printing</li>
                <li>
                  Material - These are 100% cotton t-shirt. They are comfortable
                  and durable
                </li>
                <li>
                  Sizes - This unisex t-shirt is available in - S, M, L and XL,
                  XXL
                </li>
                <li>
                  Disclaimer- Colours may slightly vary depending on your screen
                  brightness.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>

      {/* <!---------------------------- similar products section here  --------------------------------> */}
      <div class="section-similarproducts-heading">
        <h3>Similar Products</h3>
        <hr />
      </div>
      <div class="section-similarproducts">
        <div class="section-similarproducts-div">
          <div class="productcard">
            <div class="productcard-img">
              <img
                src={require("../assets/tee-mockup(no_bg).png")}
                alt=""
                class="product-pic"
              />
            </div>
            <div class="productcard-desc">
              <h4 class="productcard-name">Alien Black Fossil</h4>
              <div class="productcard-price">
                <span class="before">₹599</span>
                <span class="current">₹499</span>
              </div>
            </div>
          </div>
          <div class="productcard">
            <div class="productcard-img">
              <img
                src={require("../assets/tee-mockup(no_bg).png")}
                alt=""
                class="product-pic"
              />
            </div>
            <div class="productcard-desc">
              <h4 class="productcard-name">Alien Black Fossil</h4>
              <div class="productcard-price">
                <span class="before">₹599</span>
                <span class="current">₹499</span>
              </div>
            </div>
          </div>
          <div class="productcard">
            <div class="productcard-img">
              <img
                src={require("../assets/tee-mockup(no_bg).png")}
                alt=""
                class="product-pic"
              />
            </div>
            <div class="productcard-desc">
              <h4 class="productcard-name">Alien Black Fossil</h4>
              <div class="productcard-price">
                <span class="before">₹599</span>
                <span class="current">₹499</span>
              </div>
            </div>
          </div>
          <div class="productcard">
            <div class="productcard-img">
              <img
                src={require("../assets/tee-mockup(no_bg).png")}
                alt=""
                class="product-pic"
              />
            </div>
            <div class="productcard-desc">
              <h4 class="productcard-name">Alien Black Fossil</h4>
              <div class="productcard-price">
                <span class="before">₹599</span>
                <span class="current">₹499</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
