import React from "react";
// import "./signup.css";

import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Formik, Field } from "formik";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { createservice } from "../../store/reducers/serviceSlice";
// import Select from "react-select";
import { PageWrapper } from "./styles";
const Booking = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.service);
  const { userProfile } = useSelector((state) => state.userProfile);
  const createServiceHandeler = () => {
    console.log("working");
    // localStorage.setItem("userProfile", JSON.stringify(userProfile));
    //console.log(localStorage.getItem("userProfile"));
    fetch("https://mernpawtastic.herokuapp.com/service", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: userProfile[0].email,
        messsage: service.messsage,
        razorPayLink: service.razorPayLink,
        frequency: service.frequency,
        start_Date: service.start_Date,
        days: service.days,
        Times: service.Times,
        note_for_sitter: service.note_for_sitter
      })
    });
  };
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
            marginLeft: "2rem",
            marginTop: "16rem"
          }}
        >
          <h1>Service Type : {service.message}</h1>

          <Formik
            initialValues={{}}
            // validate={(values) => {
            //   const errors = {};
            //   if (!values.email) {
            //     errors.email = "Required";
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address";
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);

              //dispatch(createUserProfile({ ...values }));
              dispatch(createservice({ ...values }));
              createServiceHandeler();
              history.push("/Services/ConfirmDetails");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>Frequency: </label>
                  <label>
                    <Field type="radio" name="frequency" value="Recurring" />
                    <text>Recurring</text>
                  </label>
                  <label>
                    <Field type="radio" name="frequency" value="One time" />
                    <text>One time</text>
                  </label>
                  {/* <div>Picked: {values.pet}</div> */}
                </div>
                {"  "}
                <br></br>
                <label>Start date : </label>
                <input
                  type="date"
                  name="start_Date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start_Date}
                />
                {errors.start_Date && touched.start_Date && errors.start_Date}
                {"     "}
                <br></br>
                <label>Choose your Days : </label>

                <PageWrapper>
                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field type="checkbox" name="days" value="Monday" />
                      Monday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Tuesday" />
                      Tuesday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Wednesday" />
                      Wednesday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Thursday" />
                      Thursday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Friday" />
                      Friday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Saturday" />
                      Saturday
                    </label>
                    <label>
                      <Field type="checkbox" name="days" value="Sunday" />
                      Sunday
                    </label>
                  </div>
                </PageWrapper>
                <br></br>
                <label>Times : </label>
                <PageWrapper>
                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field type="checkbox" name="Times" value="Morning" />
                      Morning
                    </label>
                    <label>
                      <Field type="checkbox" name="Times" value="Afternoon" />
                      Afternoon
                    </label>
                    <label>
                      <Field type="checkbox" name="Times" value="Evening" />
                      Evening
                    </label>
                  </div>
                </PageWrapper>
                <br></br>
                <br></br>
                <label>Notes for your sitter: </label>
                <input
                  type="text"
                  name="note_for_sitter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.note_for_sitter}
                />
                {errors.note_for_sitter &&
                  touched.note_for_sitter &&
                  errors.note_for_sitter}
                {"     "}
                <br></br>
                <br></br>
                {/* <a
                  style={{ textDecoration: "none" }}
                  className="btn"
                  href="https://rzp.io/l/pm7TweedaE"
                > */}
                <button className="btn" type="submit">
                  Next
                </button>
                {/* </a> */}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Booking;
