import React, { useState } from "react";
import people from "./data";
import "./Review.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [counter, setCounter] = useState(0);
  const forwardbtnHandeler = () => {
    if (counter === 3) {
      setCounter(0);
    } else {
      setCounter((preid) => preid + 1);
    }
  };
  const backwardbtnHandeler = () => {
    if (counter === 0) {
      setCounter(people.length - 1);
    } else {
      setCounter((preid) => preid - 1);
    }
  };
  const surpriseHandeler = () => {
    const randno = Math.floor(Math.random() * people.length);
    setCounter(randno);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={people[counter].image} alt="yes"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {people[counter].name}</h4>

      <p className="info">{people[counter].text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={backwardbtnHandeler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={forwardbtnHandeler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surpriseHandeler}>
        Reviews
      </button>
    </article>
  );
};

export default Review;
