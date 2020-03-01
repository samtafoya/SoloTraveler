import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
//import './css/styles.css'

class ValidatedLoginForm extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('/users', {
      method: 'POST',
      data: {
        name: self.refs.name,
        job: self.refs.job
      }
    })
      .then(function (response) {
        return response.json()
      }).then(function (body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Name" ref="name" />
        <input type="text" placeholder="Job" ref="job" />
        <input type="submit" />
      </form>
    );
  }
}

/*const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "", first_name: "", last_name: "", age: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      first_name: Yup.string()
        .required("Required"),
      last_name: Yup.string()
        .required("Required"),
      age: Yup.string()
        .required("Required"),
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <label htmlFor="first_name">First Name</label>
          <input
            name="first_name"
            type="text"
            placeholder="Enter your first name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.first_name && touched.first_name && "error"}
          />
          {errors.first_name && touched.first_name && (
            <div className="input-feedback">{errors.first_name}</div>
          )}
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            type="text"
            placeholder="Enter your last name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.last_name && touched.last_name && "error"}
          />
          {errors.last_name && touched.last_name && (
            <div className="input-feedback">{errors.last_name}</div>
          )}
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="text"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age && "error"}
          />
          {errors.age && touched.age && (
            <div className="input-feedback">{errors.age}</div>
          )}
          <button type="submit" disabled={false}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);*/

export default ValidatedLoginForm;
