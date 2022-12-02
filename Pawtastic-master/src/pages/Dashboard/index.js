import React from "react";
// import "./signup.css";
import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
// import { useState } from "react";
// import { Formik } from "formik";
// import { useHistory } from "react-router";
// import { useDispatch } from "react-redux";
// import { createUserProfile } from "../../store/reducers/userProfileSlice";
import Profile from "../Dashboard/Profile";
// import Service from "../Dashboard/Service";

const Register = () => {
  // const history = useHistory();
  //   const dispatch = useDispatch();

  // const [isService, setisService] = useState(true);

  return (
    <div className="wrapper wrapper-sign">
      <img className="back-pic" src={BackGroundCat1} alt="back"></img>
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
        {/* <h1 style={{ color: "white" }}>Why our service?</h1> */}
        {/* <p style={{ color: "white", fontSize: "20px", marginRight: "2rem" }}>
          <br></br>
          We’re animal lovers backed by insurance and experience<br></br>{" "}
          Powered by tech, so you can book and pay from our app <br></br>{" "}
          Updates and pics for every visit keep you in the loop
        </p> */}
        <br></br>
        {/* <button
          onCLick={() => setisService(false)}
          className="btn"
          style={{ marginLeft: "-4rem" }}
        >
          User Profile
        </button> */}
        <br></br>
        <br></br>
        <br></br>
        {/* <button
          onCLick={() => setisService(false)}
          className="btn"
          style={{ marginLeft: "-4rem", width: "9rem" }}
        >
          Services
        </button> */}
      </div>
      <div
        className="box2"
        style={{
          backgroundColor: "#F7ECEB"
        }}
      >
        <div
          style={{
            marginLeft: "2rem",
            marginTop: "7rem"
          }}
        >
          {/* <h1>
            Good news! We care for pets in Winter Park. Let’s create your
            account.
          </h1> */}
          <Profile />
          {/* <Service /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
