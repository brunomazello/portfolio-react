import React from "react";
import img_center from "../images/img_center.png";
import styles from "./Home.module.css";
import SocialMedia from "../components/SocialMedia";
import Description from "../components/Description";

function Home() {
  return (
    <div className={styles.home_container}>
      <SocialMedia />
      <img src={img_center} alt="" />
      <Description />
    </div>
  );
}

export default Home;
