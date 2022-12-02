import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
const Dashboard = () => {

    return(
      <div className="wrapper wrapper-dash">
          <div style={{marginTop:"-2rem",marginLeft:"-15rem"}}
        className="Logo"
        >
          <Link className="NavLinks" to="/">
            <img style={{marginleft: "1rem"}} src={Logo} alt="Logo"></img>
          </Link>{" "}
          <Link className="NavLinks" to="/">
            {" "}
            <h2 style={{ marginLeft: "1rem", marginTop: "0.65rem" }}>
              Pawtastic
            </h2>
          </Link>
        </div>
        <div className="leftpane">
        <p style={{ color: "#9597A6"}}>SERVICES</p>
        <p style={{color:"white"}}>Scheduled</p>
        <br></br>
        <p style={{color:"white"}}>Completed</p>
        <br></br><br></br>
        <p style={{ color:"#9597A6" }}>PETS</p>
        <br></br>
        <p style={{color:"white"}}>Ginger</p>
        <br></br>
        <p style={{color:"white"}}>Fluffy</p>
        
            <br></br>
            <button className="btn">
                Book a service
              </button>
              <footer>
              <p style={{color:"white"}}>My Account</p>
                <br></br>
                <p style={{color:"white"}}>Support</p>
                <br></br>
                <p style={{color:"white"}}>Sign out</p>
              </footer>
              </div>
              <div className="middlepane">
                <p style={{color:"#9597A6"}}>My Services</p> 
                <hr></hr>
                <h3 style={{color:"#9597A6"}}>SCHEDULED SERVICES</h3>
                <hr></hr>
                <p style={{color:"9597A6"}}><b>Saturday</b> Febraury 20th</p>
                <br></br>
                <p style={{color:"#9597A6"}}>Dog walk</p>
                <p style={{color:"#9597A6"}}>Morning</p>
                <hr></hr>
                <p style={{color:"9597A6"}}><b>Sunday</b> Febraury 21th</p>
                <br></br>
                <p style={{color:"#9597A6"}}>Dog walk</p>
                <p style={{color:"#9597A6"}}>Morning</p>
                <hr></hr>
                <h3 style={{color:"#9597A6"}}>COMPLETED SERVICES</h3>
                <p style={{color:"9597A6"}}><b>Friday</b> Febraury 19th</p>
                <br></br>
                <p style={{color:"#9597A6"}}>Dog walk</p>
                <p style={{color:"#9597A6"}}>Morning</p>
                <br></br>
                <p style={{color:"9597A6"}}><b>Thursday</b> Febraury 18th</p> &nbsp; &nbsp;&nbsp;<image src="../assets../dog walk.svg"></image>
                <br></br>
                <p style={{color:"#9597A6"}}>Dog walk</p>
                <p style={{color:"#9597A6"}}>Morning</p>
                <br></br>
                <p style={{color:"9597A6"}}><b>Wednesday</b> Febraury 17th</p>
                <br></br>
                <p style={{color:"#9597A6"}}>Dog walk</p>
                <p style={{color:"#9597A6"}}>Morning</p>


              </div>
              <div className="leftpane">
              <p style={{color:"9597A6"}}>Friday,Thursday, Friday 18th</p>
              <hr></hr>
              <p style={{color:"9597A6"}}> Service for</p>
              <p style={{color:"9597A6"}}>Ginger Fisher</p>  &nbsp;  &nbsp; &nbsp; 
              <button type="Edit">Edit</button>
              <br></br>
              


              </div>

            </div>
            
    );
      
           
        };

            
              