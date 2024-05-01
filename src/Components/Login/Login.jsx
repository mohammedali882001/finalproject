import React, { useState } from "react";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ SaveUserData }) {
  let Navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(false);
  let [msgError, setMsgError] = useState("");

  let HandleLogin = async (values) => {
    setIsLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((response) => {
        localStorage.setItem("userToken", response.data.token);
        SaveUserData();
        console.log(response.data);
        setIsLoading(false);
        Navigate("/");
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
    email: Yup.string()
      .required("email is Required")
      .email("plz enter correct email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "The password must be at least 8 characters long and contain at least one alphabet character, one digit, and one special character among @$!%*?&."
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: HandleLogin,
    validationSchema: Validation,
  });

  return (
    <>
      <div className=" w-75 mx-mx-auto py-4 ">
        <h3>Login Now : </h3>

        <form onSubmit={formik.handleSubmit}>
          {msgError.length > 0 ? (
            <div className=" alert  alert-danger ">{msgError}</div>
          ) : null}

          <label className=" float-start " htmlFor="email">
            Email :{" "}
          </label>
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

          <label className=" float-start " htmlFor="password">
            Password :{" "}
          </label>
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

          {isLoading ? (
            <button type="button" className=" btn bg-main text-white ">
              <i className=" float-start fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              className=" float-start  btn bg-main text-white "
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}
