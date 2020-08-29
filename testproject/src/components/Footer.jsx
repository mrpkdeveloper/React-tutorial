import React from "react";
// import skull from "./assets/skull.png";
const Footer = () => {
  return (
    <>
      <div class="footer-upper">
        <div class="box">
          <img
            class="image-services"
            src={require("../assets/planet.png")}
            alt="image"
          />
          <h2 class="h-secondary">Pan India Shiping</h2>
          <p>
            We deliver to 12,000 pin codes in India with the help of our
            delivery partner
          </p>
        </div>
        <div class="box">
          <img
            class="image-services"
            src={require("../assets/padlock.png")}
            alt="image"
          />
          <h2 class="h-secondary">Secure Payments</h2>
          <p>You can pay via Debit or Credit card</p>
        </div>
        <div class="box">
          <img
            class="image-services"
            src={require("../assets/sale.png")}
            alt="image"
          />
          <h2 class="h-secondary">Best offers</h2>
          <p>
            Keep an eye on our social media handles, we always have some sort of
            discounts running
          </p>
        </div>
        <div class="box">
          <img
            class="image-services"
            src={require("../assets/medal.png")}
            alt="image"
          />
          <h2 class="h-secondary">Best Quality</h2>
          <p>
            Every piece of garment is tried and tested before it is up for sale.
            100% quality assured
          </p>
        </div>
      </div>

      <div class="footerlogo">
        <img
          class="image-services-logo"
          src={require("../assets/skull.png")}
          alt="image"
        />
        <div class="footerlogoname">
          <h1>HashBlack</h1>
        </div>
        <div class="footer-subscribe">
          <input type="text" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div class=" footer">
        <div class="footerbox-main">
          <div class="socialmedialogo">
            <img
              class="image-services-medialogo"
              src={require("../assets/visa .png")}
              alt="image"
            />
            <img
              class="image-services-medialogo"
              src={require("../assets/paypal.png")}
              alt="image"
            />
          </div>
          <div class="socialmedialogo">
            <img
              class="image-services-medialogo"
              src={require("../assets/mastercard.png")}
              alt="image"
            />
            <img
              class="image-services-medialogo"
              src={require("../assets/paytm.png")}
              alt="image"
            />
          </div>
        </div>
        <div class="footerbox">
          <h2 class="h-secondary">Contact us</h2>
          <ul class="footerlist">
            <li>support@youngfossil.com</li>
            <li>xyz first floor</li>
            <li>abcdefg</li>
            <li>delhi 1100xx</li>
          </ul>
        </div>
        <div class="footerbox">
          <h2 class="h-secondary">Our Policies</h2>
          <ul class="footerlist">
            <li>Privacy Policies</li>
            <li>Shiping Policies</li>
            <li>Return Policies</li>
            <li>Terms And Services</li>
          </ul>
        </div>
        <div class="footerbox">
          <h2 class="h-secondary">Get To Know Us</h2>
          <ul class="footerlist">
            <li>Home</li>
            <li>About Us</li>
            <li>Themes</li>
            <li>Carrers</li>
          </ul>
        </div>

        <div class="footerbox-main">
          <div class="socialmedialogo">
            <img
              class="image-services-medialogo"
              src={require("../assets/facebook.png")}
              alt="image"
            />
            <img
              class="image-services-medialogo"
              src={require("../assets/youtube.png")}
              alt="image"
            />
          </div>
          <div class="socialmedialogo">
            <img
              class="image-services-medialogo"
              src={require("../assets/instagram.png")}
              alt="image"
            />
            <img
              class="image-services-medialogo"
              src={require("../assets/twitter.png")}
              alt="image"
            />
          </div>
        </div>
      </div>

      <div class="footer-lower">
        <h1>Copyright © www.YoungFossil.com. All rights reserved!</h1>
      </div>
    </>
  );
};

export default Footer;
