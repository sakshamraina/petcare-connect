import React, { useState } from "react";
import "./signup.css";
import BackGroundCat from "../../assets/backGroungCat.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
const Signup = () => {
  const [zipCode, setZipCode] = useState(0);
  const [process, setProcess] = useState(true);
  const [status, setStatus] = useState("disabled");
  const checkHandeler = () => {
    console.log(Number(zipCode));

    if (Number(zipCode) > 180000 && Number(zipCode) < 190000) {
      setProcess(true);
      setStatus("");
    } else {
      setProcess(false);
      setStatus("disabled");
    }
  };

  return (
    <div className="wrapper wrapper-sign">
      <img className="back-pic" src={BackGroundCat} alt="back"></img>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <div
          style={{ marginTop: "-2rem", marginLeft: "-15rem" }}
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
        <h1 style={{ color: "white" }}>Why our service?</h1>
        <p style={{ color: "white", fontSize: "20px", marginRight: "2rem" }}>
          <br></br>
          We’re animal lovers backed by insurance and experience<br></br>{" "}
          Powered by tech, so you can book and pay from our app <br></br>{" "}
          Updates and pics for every visit keep you in the loop
        </p>
      </div>
      <div
        className="box2"
        style={{
          backgroundColor: "#F7ECEB"
        }}
      >
        <div
          style={{
            backgroundColor: "#F7ECEB",
            textAlign: "center",
            marginTop: "22rem"
          }}
        >
          <h1>First, let’s make sure we serve your area.</h1>
          <label htmlFor="zipCode">Zip Code : </label>
          <input
            type="number"
            id="zipCode"
            style={{ padding: "1rem", border: "none" }}
            // value={zipCode}
            placeholder="Enter the zipCode"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          ></input>
          {"   "}
          <button className="btn" onClick={checkHandeler}>
            Check
          </button>
          {"  "}
          <Link to="/Signup/register">
            <button disabled={status} className="btn">
              Next
            </button>
          </Link>
          {/*   */}
          {!process && (
            <h2>
              Please try some other pincode , Sorry we dont serve at you area{" "}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
