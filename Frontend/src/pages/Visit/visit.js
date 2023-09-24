import React from "react";
//import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";
//import "react-datepicker/dist/react-datepicker.css";
import { PageWrapper } from "../Services/styles";
import { Width } from "../Services/styles";

const Visit = () => {
  return (
    <Formik initialValues={{ notes: "" }}>
      {({ values, setFieldValue }) => (
        <Form onSubmit={() => {}}>
          <h1> Drop-in Visit</h1>
          <br></br>
          <h3>Choose your Frequency</h3>
          <PageWrapper>
            <p>
              <div id="frequency" role="group" aria-labelledby="frequency" />
              <label>
                <Field type="radio" name="frequency" value="One" />
                One time
              </label>
              <label>
                <Field type="radio" name="frequency" value="Two" />
                Recurring
              </label>{" "}
            </p>
          </PageWrapper>

          <br></br>

          <h3>Choose your Days</h3>
          <PageWrapper>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="checked" value="Mon" />
                Monday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Tue" />
                Tuesday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Wed" />
                Wednesday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Thur" />
                Thursday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Fri" />
                Friday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Sat" />
                Saturday
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Sun" />
                Sunday
              </label>
            </div>
          </PageWrapper>
          <br></br>

          <h3> Choose your timing</h3>
          <PageWrapper>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="checked" value="Morn" />
                Morning
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Aft" />
                Afternoon
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Eve" />
                Evening
              </label>
            </div>
          </PageWrapper>
          <h3>Mention preferences for your sitter </h3>
          <PageWrapper>
            <Width>
              <Field
                id="notes"
                type="text"
                placeholder="Route preferences, sleep time, treats, etc."
                value={values.notes}
              />
            </Width>
          </PageWrapper>

          <h3> Select Date</h3>

          <input
            //selected={values.startDate}
            //dateFormat="MMMM d, yyyy"
            type="date"
            className="form-control"
            name="startDate"
            onChange={(date) => setFieldValue("startDate", date)}
            placeholderText="Date"
          />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Visit;
