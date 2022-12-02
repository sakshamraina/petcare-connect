import React from "react";
import "./signup.css";
import BackGroundCat from "../../assets/backgroundCat3.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import DogOption from "../../assets/DogOption.svg";
import CatOption from "../../assets/CatOption.svg";
import ParrotOption from "../../assets/ParrotOption.svg";
import rabbitOption from "../../assets/rabbitOption.svg";
import { Formik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createUserProfile } from "../../store/reducers/userProfileSlice";
import { useHistory } from "react-router";

const RegisterPetBasic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.userProfile);
  // console.log(userProfile);
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
            Nice to meet you, {userProfile.FirstName}. Tell us all about your
            furry, feathery, or scaley friend.
          </h1>

          {/* formik */}
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
              history.push("./petDetails");
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
                  <label>
                    <Field type="radio" name="pet" value="Dog" />
                    <img src={DogOption} alt="Dog"></img>
                  </label>
                  <label>
                    <Field type="radio" name="pet" value="Cat" />
                    <img src={CatOption} alt="Cat"></img>
                  </label>
                  <label>
                    <Field type="radio" name="pet" value="Parrot" />
                    <img src={ParrotOption} alt="Parrot"></img>
                  </label>
                  <label>
                    <Field type="radio" name="pet" value="Rabbit" />
                    <img src={rabbitOption} alt="Rabbit"></img>
                  </label>
                  {/* <div>Picked: {values.pet}</div> */}
                </div>
                <br></br>
                <button className="btn" type="submit" disabled={isSubmitting}>
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

export default RegisterPetBasic;
