import React from "react";
import "./signup.css";
import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Formik } from "formik";
import { useHistory } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { authCheck } from "../../store/reducers/authSlice";
import { createUserProfile } from "../../store/reducers/userProfileSlice";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //const { auth } = useSelector((state) => state.auth);
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
          <h1>Login with your credentials</h1>
          <Formik
            initialValues={{}}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   console.log(values);
              //   setSubmitting(false);
              // }, 400);
              //dispatch(createUserProfile(JSON.stringify(values)));
              //dispatch(createUserProfile({ ...values }));
              //history.push("./LoginHumanProfile");

              //Joining backend
              // if (
              //   values.email === "aagman@gmail.com" &&
              //   values.password === "aagman"
              // ) {
              //   alert("signedIN");

              // } else {
              //   alert("Wrong Email or password");
              // }

              fetch("https://mernpawtastic.herokuapp.com/signin", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password
                })
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.message === "success") {
                    console.log(data);
                    dispatch(authCheck(true));
                    dispatch(createUserProfile({ ...data.data }));
                    history.push("./");
                  } else {
                    console.log(data);
                    alert(data.message);
                  }
                });
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
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                {"  "}
                <label>Password : </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                {"     "}
                <button className="btn" type="submit">
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

export default Login;
