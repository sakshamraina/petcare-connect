import React from "react";
// import "./signup.css";
import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
//import { Formik } from "formik";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createservice } from "../../store/reducers/serviceSlice";
import ServicePriceCard from "../../components/ServicePriceCard/Price";
import { useSelector } from "react-redux";
// import { authCheck } from "../../store/reducers/authSlice";
import Login from "../Login/index";

const Services = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  if (!auth) {
    return <Login />;
  }
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
        <h1 style={{ color: "white" }}>All services include:</h1>
        <p style={{ color: "white", fontSize: "20px", marginRight: "2rem" }}>
          <br></br>Treats for your pet, with your permission of course <br></br>{" "}
          <br></br>
          We’ll take your pup for a 30 minute walk and make sure he or she has
          fresh food and water.
          <br></br> <br></br>We’ll stop by to snuggle, feed, and play with your
          pets in the comfort of their own home.<br></br>
          <br></br>
          We’ll stay overnight with your pets to make sure they have
          round-the-clock love.
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
            marginLeft: "2rem",
            marginTop: "10rem"
          }}
        >
          <h1>We can’t wait to see your pet! How can we help?</h1>
          <ServicePriceCard />
          <br></br>

          <button
            onClick={() => {
              dispatch(
                createservice({
                  message: "Dog Walk",
                  razorPayLink: "https://rzp.io/l/pm7TweedaE"
                })
              );
              history.push("/Services/Booking");
            }}
            style={{ marginLeft: "5rem" }}
            className="btn"
          >
            Dog Walk
          </button>

          <button
            onClick={() => {
              dispatch(
                createservice({
                  message: "Drop-in Visit",
                  razorPayLink: "https://rzp.io/l/oj0V0f7bmi"
                })
              );
              history.push("/Services/Booking");
            }}
            style={{ marginLeft: "13rem" }}
            className="btn"
          >
            Drop-in Visit
          </button>

          <button
            onClick={() => {
              dispatch(
                createservice({
                  message: "House Sitting",
                  razorPayLink: "https://rzp.io/l/Y2Bv27XyR"
                })
              );
              history.push("/Services/Booking");
            }}
            style={{ marginLeft: "11rem" }}
            className="btn"
          >
            House Sitting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
