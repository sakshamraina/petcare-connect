import React from "react";
import Review from "../../components/Reviews/index";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
const Reviews = () => {
  return (
    <main>
      <section className="container">
        <div
          style={{ marginTop: "-2rem", marginLeft: "-20rem" }}
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
          <h1 style={{ fontSize: "40px", color: "white" }}>
            Pets & their humans love us
          </h1>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;
