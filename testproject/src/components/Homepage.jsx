import React from "react";
// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div class="home">
        <div class="home-content">
          <h1 class="h-primary ">Comming Soon</h1>
          <p>Wait for our premium product category</p>
        </div>
      </div>
      <div class="section-ourproduct">
        <div class="headingdiv">
          <h1 class="heading">Our-Product</h1>
          <hr />
        </div>
        <div class="contentdiv">
          <div class="contentimgdiv">
            <img
              class="contentimg"
              src={require("../assets/tee-mockup(no_bg).png")}
              alt=""
            />
          </div>
          <div class="content">
            <h2 class="heading-2">Only</h2>
            <h2 class="heading-3">98</h2>
            <h2 class="heading-2">Pieces left</h2>
            <button class="contentbtn">
              <a href="/productpage">Buy Now</a>
            </button>
          </div>
        </div>
      </div>
      <div class="section-whyblackhush">
        <div class="headingdiv">
          <h1 class="heading">Why BlackHush</h1>
          <hr />
        </div>
        <div class="contentdiv">
          <div class="content">
            <p>
              Escape the endless, revolving door of fast fashion trends by
              joining BLACKHUSH. Fresh designs by local artists, premium
              fabrics, and the freedom to challenge the status quo — that’s what
              our brand is all about. Black is bold. Black is brave. Black never
              goes out of style. Sale!
            </p>
          </div>
          <div class="contentimgdiv">
            <img
              class="contentimg"
              src={require("../assets/whyblack2.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="section-Blacktee">
        <div class="headingdiv">
          <h1 class="heading">Black Tee</h1>
          <hr />
        </div>
        <div class="contentdiv">
          <div class="contentimgdiv">
            <img
              class="contentimg"
              src={require("../assets/blackteemodal.jpg")}
              alt=""
            />
          </div>
          <div class="content">
            <p>
              The most premium Black Tee of all kind Which enhances your overall
              style and personality. We never compromise on our product quality
              and we can assured you this is the best quality black tshirt that
              you can buy on this planet
            </p>
            <button class="contentbtn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
