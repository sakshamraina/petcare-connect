import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
const About = () => {
  return (
    <main>
      <section className="container">
        <div
          style={{ marginTop: "-2rem", marginLeft: "-5rem" }}
          className="Logo"
        >
          <Link className="NavLinks" to="/">
            <img style={{ marginLeft: "1rem" }} src={Logo} alt="Logo"></img>
          </Link>{" "}
          <Link className="NavLinks" to="/">
            {"    "}
            <h2 style={{ marginLeft: "1rem", marginTop: "0.65rem" }}>
              Pawtastic
            </h2>
          </Link>
        </div>
        <div className="title">
          <h1 style={{ fontSize: "40px", color: "white" }}>About US</h1>
          <div className="underline"></div>
        </div>
        <p
          style={{
            background: "white",
            height: "200px",
            width: "600px",
            padding: "2rem",
            fontSize: "20px",
            color: "black"
          }}
        >
          We care for your furry little loved ones while you’re away , We’ll
          take your pup for a 30 minute walk and make sure he or she has fresh
          food and water. We’ll stop by to snuggle, feed, and play with your
          pets in the comfort of their own home. We’ll stay overnight with your
          pets to make sure they have round-the-clock love.
        </p>
      </section>
    </main>
  );
};

export default About;
