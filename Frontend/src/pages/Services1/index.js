import React from "react";
import { Link } from "react-router-dom";
import ServicePriceCard from "../../components/ServicePriceCard/Price";

const alignStyle = {
  textAlign: "center",
  fontSize: "20px",
  color: "black",
  backgroundColor: "#f7eceb"
};

const index = () => {
  return (
    <>
      <div class="block">
        <p style={alignStyle}>
          <h1>
            {" "}
            Our services include-<br></br>
          </h1>
          <h3> Regular Photo Updates</h3>
          <h3> Notifications of your sitter arrival</h3>
          <h3>Exquisite care for your pet, including treats</h3>
          <br></br>
          <br></br>
          <br></br>
          <h1>We can't wait to see your pet! How can we help?</h1>
        </p>
      </div>
      <ServicePriceCard />
      <Link to="/Services/Walk">
        <button
          style={{
            color: "white",
            backgroundColor: "#545871",
            marginLeft: "175px"
          }}
          className="btn"
        >
          Take a Walk!
        </button>
      </Link>
      <Link to="/Services/Visit">
        <button
          style={{
            color: "white",
            backgroundColor: "#545871",
            marginLeft: "375px"
          }}
          className="btn"
        >
          Come Visit!
        </button>
      </Link>
      <Link to="/Services/Stay">
        <button
          style={{
            color: "white",
            backgroundColor: "#545871",
            marginLeft: "375px"
          }}
          className="btn"
        >
          Stay with Me!
        </button>
      </Link>
    </>
  );
};

export default index;
