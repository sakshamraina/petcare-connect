import React from "react";
import "./signup.css";
import BackGroundCat from "../../assets/backgroundCat3.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Formik } from "formik";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createUserProfile } from "../../store/reducers/userProfileSlice";

const RegisterHumanProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="wrapper wrapper-sign">
      <img className="back-pic" src={BackGroundCat} alt="back"></img>

      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <div
          style={{ marginTop: "-2rem", marginLeft: "-15rem" }}
          className="Logo"
        >
          <Link className="NavLinks" to="/">
            <img style={{ marginLeft: "1rem" }} src={Logo} alt="Logo"></img>
          </Link>{" "}
          <Link className="NavLinks" to="/">
            {" "}
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
          <h1>
            Good news! We care for pets in Winter Park. Let’s create your
            account.
          </h1>

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
              dispatch(createUserProfile({ ...values }));
              history.push("./registerPetBasic");
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
                <label>First Name : </label>
                <input
                  type="text"
                  name="FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.FirstName}
                />
                {errors.FirstName && touched.FirstName && errors.FirstName}{" "}
                <label style={{marginLeft:"2rem"}}>LastName : </label>
                <input
                  type="text"
                  name="LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.LastName}
                />
                {errors.LastName && touched.LastName && errors.LastName}{" "}
                <br></br>
                <br></br>
                <label>Phone : </label>
                <input
                style={{marginLeft:"2rem"}}
                  type="phone"
                  name="Phone"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Phone}
                />
                {errors.Phone && touched.Phone && errors.Phone}
                {"                        "}
                <label style={{marginLeft:"2rem"}}>PhoneAlt : </label>
                <input
                  style={{marginLeft:"0.3rem"}}
                  type="phone"
                  name="PhoneAlt"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.PhoneAlt}
                />
                {errors.PhoneAlt && touched.PhoneAlt && errors.PhoneAlt}{" "}
                <br></br>
                <br></br>
                <label>City : </label>
                <input
                  style={{marginLeft:"3.1rem"}}
                  type="text"
                  name="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.City}
                />
                {errors.City && touched.City && errors.City}
                <label style={{marginLeft:"2.2rem"}}>Zip Code : </label>
                <input
                  style={{marginLeft:"0.45rem"}}
                  type="zipcode"
                  name="ZipCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ZipCode}
                />
                {errors.ZipCode && touched.ZipCode && errors.ZipCode} <br></br>
                <br></br>
                <button style={{marginTop:"1.5rem"}} className="btn" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterHumanProfile;
