import React from "react";
import styles from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
export default function Home() {
  return (
    <>
      {/* <h2 className=" h22">Home</h2> */}

      <FeaturedProducts></FeaturedProducts>
    </>
  );
}
