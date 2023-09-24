import React from "react";
import "./signup.css";
import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createUserProfile } from "../../store/reducers/userProfileSlice";
import { Formik, Field } from "formik";
const PetDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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
          <h1>
            Good news! We care for pets in Winter Park. Let’s create your
            account.
          </h1>
          <Formik
            initialValues={{}}
            validate={(values) => {
              // const errors = {};
              // if (!values.email) {
              //   errors.email = "Required";
              // } else if (
              //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              // ) {
              //   errors.email = "Invalid email address";
              // }
              // return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
              dispatch(createUserProfile({ ...values }));
              history.push("./vetDetails");
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
                <label>Name : </label>
                <input
                  placeholder="Enter dogs name"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                {" "}
                <br></br><br></br>
                <label>Breed : </label>
                <input
                  type="text"
                  name="breed"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.breed}
                />
                {errors.breed && touched.breed && errors.breed}
                {" "}
                <br></br><br></br>
                <label>Birth Day : </label>
                <input
                  type="date"
                  name="birthDay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthDay}
                />
                {errors.birthDay && touched.birthDay && errors.birthDay}
                {" "}
                <br></br><br></br>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>Gender : </label>
                  <label>
                    <Field type="radio" name="Gender" value="Male" />
                    <text>Male</text>
                  </label>
                  <label>
                    <Field type="radio" name="Gender" value="Female" />
                    <text>Female</text>
                  </label>
                  {/* <div>Picked: {values.Gender}</div> */}
                </div>
                {"     "}
                <br></br>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>Spayed or Neutered : </label>
                  <label>
                    <Field type="radio" name="neutered" value="yes" />
                    <text>Yes</text>
                  </label>
                  <label>
                    <Field type="radio" name="neutered" value="no" />
                    <text>No</text>
                  </label>
                  {/* <div>Picked: {values.neutered}</div> */}
                </div>
                {"      "}
                <br></br>
                <label>Weight(in kgs) : </label>
                <input
                  type="number"
                  name="weight"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                />
                {errors.weight && touched.weight && errors.weight}
                {"     "}
                <br></br><br></br><br></br>
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

export default PetDetails;
