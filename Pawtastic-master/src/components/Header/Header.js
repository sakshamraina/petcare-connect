import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { authSlice } from "../../store/reducers/authSlice";
import { useDispatch } from "react-redux";
import { authCheck } from "../../store/reducers/authSlice";

const Header = () => {
  const { auth } = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Logo">
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
      <ul id="nav">
        <Link className="NavLinks" to="/About">
          <li>About</li>
        </Link>

        <Link className="NavLinks" to="/Reviews">
          <li>Reviews</li>
        </Link>

        {auth && (
          <Link className="NavLinks" to="/Services">
            <li>Services</li>
          </Link>
        )}

        {auth && (
          <Link className="NavLinks" to="/Dashboard">
            <li>Dashboard</li>
          </Link>
        )}

        {/* {auth && (
          <Link className="NavLinks" to="/Profile">
            <li>Profile</li>
          </Link>
        )} */}
        {!auth && (
          <Link className="NavLinks" to="/Signup">
            <li>Signup</li>
          </Link>
        )}
        {!auth && (
          <Link className="NavLinks" to="/Login">
            <li>Login</li>
          </Link>
        )}
        {auth && (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(authCheck(false));
            }}
            className="NavLinks"
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
