import React from "react";
import "./Dashboard4.css";

import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Dashboard4 = () => {



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
  
        <div className="middlepane" >
          <p style={{color:"#9597A6"}}>My Account</p>
          <hr>
          </hr>
          <br></br>
          <p style={{color:"#9597A6"}}>PROFILE</p>
          <br></br>
          <p style={{color:"white"}}>Home address</p>
          <br></br>
          <p style={{color:"white"}}>Contact info</p>
          <br></br> <br></br>
          <p style={{color:"#9597A6"}}>PAYMENT INFO</p>
          <br></br>
          <p style={{color:"white"}}>Payment methods</p>
          <br></br>
          <p style={{color:"white"}}>Receipts</p>
          </div> 
        <div className="rightpane">
          <p style={{color:"#9597A6"}}>Payment methods</p>
          <hr></hr>
          <label>Credit Card holder name</label>
          <br></br>
          <input type="text"></input>
          
          <br></br>
        
          <input type="text"></input>
          <br></br>
          <label>Credit card number </label> &nbsp;&nbsp;&nbsp;&nbsp;<label>CVC</label>
          <br></br> 
          <input type="text"></input>
         
          <br></br>
          <label>Expiration date</label>
          <br></br>
          <input type="date"></input>
          &nbsp;&nbsp;&nbsp;
          <input type="number"></input>
          <br></br>
          <label>Delete this card</label>
          <br></br>
          <label>Add a new payment methods</label>



          
          
           
            

            
            
        

        </div>
    </div>

    
    

  );
};
  export default Dashboard4;




    
    


  

      
      
     


