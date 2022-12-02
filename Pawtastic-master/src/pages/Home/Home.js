import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import DogBanner from "../../assets/dogBanner.svg";
import cat from "../../assets/cat.svg";
import dog from "../../assets/dog.svg";
import rabbit from "../../assets/rabbit.svg";
import parrot from "../../assets/parrot.svg";
import blackCat from "../../assets/blackcat.svg";
import twoDog from "../../assets/twoDog.svg";
import personAndPet from "../../assets/personAndPet.svg";
import Review from "../../components/Reviews";
import ServicePriceCard from "../../components/ServicePriceCard/Price";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="back">
        <img className="DogImage" src={DogBanner} alt="Logo"></img>
      </div>
      <section className="front">
        <div className="right center" style={{ color: "white" }}>
          <h1>we care for</h1>
          <h1>your furry little </h1>
          <h1>loved ones </h1>
          <h1>while </h1>
          <h1>you’re away</h1>
          <Link to="/Services">
            <button className="btn">Schedule a visit</button>
          </Link>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="wrapper">
          <div className="block">
            <h2>Expert care for your furry, feathery, or scaley friend</h2>
            <p style={{ fontSize: "20px" }}>
              We know how stressful it is to leave your pets at home alone.
              We’re a team of experienced animal caregivers, well connected to
              local veterinarians. Trust to us to love them like our own, and to
              keep them safe and happy till you’re home.
            </p>
            <Link to="/Services">
              <button
                style={{ color: "white", backgroundColor: "#545871" }}
                className="btn"
              >
                Schedule a visit
              </button>
            </Link>
          </div>
          <div>
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={parrot}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={cat}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={dog}
            ></img>
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={rabbit}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={blackCat}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={twoDog}
            ></img>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <section>
        <div style={{ backgroundColor: "#F7ECEB" }} className="wrapper">
          <div style={{ width: "20%", float: "left" }}>
            <img src={personAndPet} alt="person"></img>
          </div>
          <div
            style={{
              width: "80%",
              float: "right",
              marginTop: "15rem",
              marginLeft: "5rem"
            }}
          >
            <h2>Services tailored to your needs</h2>{" "}
            <p style={{ fontSize: "20px" }}>
              Schedule one-off or recurring home visits. An experienced member
              of our team will spend time with your pet, feed them, change cat
              litter trays, take the dog for a walk, and anything else you need.
            </p>
            <Link to="/Services">
              <button className="btn">Schedule a visit</button>
            </Link>
          </div>
        </div>
      </section>
      <main>
        <section className="container">
          <div className="title">
            <h1 style={{ fontSize: "40px", color: "white" }}>
              Pets & their humans love us
            </h1>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      <section>
        <div>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            Affordable options, tailored to your needs
          </h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            All services include live updates including photos and chat, as well
            as notifications of sitter arrival and departure times.
          </p>
          <ServicePriceCard />
        </div>{" "}
      </section>
      <Link to="/Services">
        <button
          style={{
            color: "white",
            backgroundColor: "#545871",
            marginTop: "2rem",
            marginLeft: "40rem"
          }}
          className="btn"
        >
          Schedule a visit
        </button>
      </Link>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default Home;
