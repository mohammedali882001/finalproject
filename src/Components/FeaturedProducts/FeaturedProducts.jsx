import React, { useEffect, useState } from "react";
import styles from "./FeaturedProducts.module.css";
import axios from "axios";
export default function FeaturedProducts() {
  const [Products, setProducts] = useState([]);
  let GetAllProducts = async () => {
    let data = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((res) => {
        setProducts(res.data.data);
        console.log(Products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetAllProducts();
  }, []);
  return (
    <>
      <div className=" row ">
        {Products.map((Product) => (
          <div key={Product._id} className=" col col-md-2 ">
            <div className=" product cursor-pointer px-2 py-3  ">
              <img className=" w-100  " src={Product.imageCover}></img>
              <span className=" text-main fw-bold font-sm ">
                {Product.category.name}
              </span>
              <h3 className=" h6 fw-bolder  ">
                {Product.title.split(" ").slice(0, 2).join(" ")}
              </h3>

              <div className=" d-flex  justify-content-between  ">
                <span className=" text-muted  ">{Product.price} EGP</span>
                <span>
                  <i className=" fas fa-star rating-color "> </i>
                  {Product.ratingsAverage}{" "}
                </span>
              </div>

              <button className=" btn bg-main text-white  w-100 ">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
