import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let Navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(false);
  let [msgError, setMsgError] = useState("");

  let HandleRegister = async (values) => {
    setIsLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        Navigate("/login");
      })
      .catch((err) => {
        setIsLoading(false);
        setMsgError(err.response.data.message);
        //console.log(err.response.data.message);
      });
    // if (data.message === "success") {
    //   setIsLoading(false);
    //   Navigate("/login");
    // } else {
    //   console.log(data.message);
    // }
  };

  let Validation = Yup.object({
    name: Yup.string()
      .required("Name is Required")
      .min(3, "Name Must Be greater than 3")
      .max(10, "Name Must Be less than 10"),
    email: Yup.string()
      .required("email is Required")
      .email("plz enter correct email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "The password must be at least 8 characters long and contain at least one alphabet character, one digit, and one special character among @$!%*?&."
      ),
    rePassword: Yup.string()
      .required("Re Password Required")
      .oneOf([Yup.ref("password")], "Re Password Must Match Password"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0125][0-9]{8}$/gm, "Invalid Egyptian phone number"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: HandleRegister,
    validationSchema: Validation,
  });

  return (
    <>
      <div className=" w-75 mx-mx-auto py-4 ">
        <h3>Register Now : </h3>

        <form onSubmit={formik.handleSubmit}>
          {msgError.length > 0 ? (
            <div className=" alert  alert-danger ">{msgError}</div>
          ) : null}

          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" form-control mb-2 "
          ></input>
          {formik.errors.name && formik.touched.name ? (
            <div className=" alert  alert-danger ">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" form-control mb-2 "
          ></input>
          {formik.errors.email && formik.touched.email ? (
            <div className=" alert  alert-danger ">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" form-control mb-2 "
          ></input>
          {formik.errors.phone && formik.touched.phone ? (
            <div className=" alert  alert-danger ">{formik.errors.phone}</div>
          ) : null}
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" form-control mb-2 "
          ></input>
          {formik.errors.password && formik.touched.password ? (
            <div className=" alert  alert-danger ">
              {formik.errors.password}
            </div>
          ) : null}
          <label htmlFor="rePassword">Re Password :</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" form-control mb-2 "
          ></input>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className=" alert  alert-danger ">
              {formik.errors.rePassword}
            </div>
          ) : null}

          {isLoading ? (
            <button type="button" className=" btn bg-main text-white ">
              <i className="  fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              className="  btn bg-main text-white "
            >
              Register
            </button>
          )}
        </form>
      </div>
    </>
  );
}
