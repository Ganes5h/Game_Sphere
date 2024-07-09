import React from "react";
import "./Developers.css";
import OmkarPic from "../../Images/Omkar_2.jpg";
import VinayakPic from "../../Images/Vinayak.jpg";
function Developers() {
  return (
    <div >
      {" "}
      <div class="nav-bar">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <h3 style={{ color: "black" }}>Game Sphere</h3>
        </span>
        <a href="/">
          <buttons>
            Home
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </buttons>
        </a>
      </div>
      <div class="main-head">
        <h1 style={{ padding: "10px", marginTop: "20px" }}>
          Meet Our Team Developers
        </h1>
      </div>
      <div class="main-div">
        {/* <!-- Write code : 4 cards with Developer Image and below its Name  and responsive  --> */}
        <div class="card">
          <img src={OmkarPic} width="300px" alt="Developer 1" />
          <h3 style={{ color: "black", padding: "10px" }}>Omkar Halagekar</h3>
        </div>
        <div class="card">
          <img src={VinayakPic} width="300px" alt="Developer 2" />
          <h3 style={{ color: "black", padding: "10px" }}>Vinayak Patil</h3>
        </div>
        {/* <div class="card">
          <img src="/Krishna.jpg" width="300px" alt="Developer 3" />
          <h2>Krishna Patil</h2>
        </div> */}
        {/* <!-- <div class="card">
      <img src="https://media.licdn.com/dms/image/D5603AQEtxTy-sPXtMQ/profile-displayphoto-shrink_100_100/0/1706454668797?e=1721865600&v=beta&t=km98QiM_eXu4HLGOp3E337dQaTH0nA4RSTmnLauLVGs" width="300px" alt="Developer 4">
      <h2>Dhananjay Dharne</h2>
  </div> --> */}
      </div>
      <div class="footer">
        Copyright © 2024 This Website is made by Team{" "}
        <strong>Omkar and Vinayak</strong> | All rights reserved.{" "}
      </div>
    </div>
  );
}

export default Developers;
