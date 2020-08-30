import React from "react";
// import skull from "./assets/skull.png";
const Upperfootercard = (props) => {
  return (
    <>
      <div class="box">
        <img class="image-services" src={props.img} alt="image" />
        <h2 class="h-secondary">{props.heading}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
};

const Footer_socialmedialogo = (props) => {
  return (
    <>
      <img
        class="image-services-medialogo"
        // src={require("../assets/visa .png")}
        src={props.img}
        alt="image"
      />
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div class="footer-upper">
        <Upperfootercard
          img={require("../assets/planet.png")}
          heading={"Pan India Shiping"}
          content={
            "We deliver to 12,000 pin codes in India with the help of our delivery partner"
          }
        />
        <Upperfootercard
          img={require("../assets/padlock.png")}
          heading={"Secure Payments"}
          content={"You can pay via Debit or Credit card"}
        />
        <Upperfootercard
          img={require("../assets/sale.png")}
          heading={"Best Offers"}
          content={
            "Keep an eye on our social media handles, we always have some sort of discounts running"
          }
        />
        <Upperfootercard
          img={require("../assets/medal.png")}
          heading={"Premium Quality"}
          content={
            "Every piece of garment is tried and tested before it is up for sale 100% quality assured"
          }
        />
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
            <Footer_socialmedialogo img={require("../assets/visa .png")} />
            <Footer_socialmedialogo img={require("../assets/paypal.png")} />
          </div>
          <div class="socialmedialogo">
            <Footer_socialmedialogo img={require("../assets/mastercard.png")} />
            <Footer_socialmedialogo img={require("../assets/paytm.png")} />
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
            <Footer_socialmedialogo img={require("../assets/facebook.png")} />
            <Footer_socialmedialogo img={require("../assets/youtube.png")} />
          </div>
          <div class="socialmedialogo">
            <Footer_socialmedialogo img={require("../assets/instagram.png")} />
            <Footer_socialmedialogo img={require("../assets/twitter.png")} />
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
