import React from "react";
import "./index.css";


const Dashboard3 = () => {

return(
  <div className="wrapper wrapper-dash">
    
  
  
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
          <p style={{color:"#9597A6"}}>PROFILE
          <link></link></p>
          <br></br>
          <p style={{color:"white"}}>Home address</p>
          <br></br>
          <p style={{color:"white"}}>Contact info</p>
          <br></br> <br></br>
          <p style={{color:"#9597A6"}}>PAYMENT INFO</p>
          <br></br>
         <p style={{color:"white"}}><a href="Dashboard4.js">Payment methods</a></p>
          <br></br>
          <p style={{color:"white"}}>Receipts</p>
          </div> 
        <div className="rightpane">
          <p style={{color:"#9597A6"}}>Home address</p>
          <hr></hr>
          <label>First Name</label>
          <br></br>
          <input type="text"></input>
          <br></br>
          <label>Last Name</label>
          <br></br>
        
          <input type="text"></input>
          <br></br>
          <p style={{color:"#9597A6"}}>Street address</p>
          <br></br>
          <input type="text"></input>
          <br></br>
          <label>City</label> &nbsp;  &nbsp; &nbsp;<label>State</label> &nbsp; &nbsp; &nbsp; &nbsp;<label>Zip</label>
          <br></br> 
          <input type="text"></input>
          &nbsp;  &nbsp; &nbsp;
          <input type="number"></input>
          &nbsp;  &nbsp; &nbsp;
         
          <br></br>
          <br></br>
          
           
            <button className="bttn">
              
            Save changes
          </button>

            
            
        

        </div>
    </div>

    
    
);
};



export default Dashboard3;

