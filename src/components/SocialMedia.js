import React from "react";
import styles from "./SocialMedia.module.css";

function SocialMedia() {
  return (
    <div className={styles.socialmedia_container}>
      <ul>
        <li>Linkedin</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

export default SocialMedia;
