import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <h1>Bruno Mazello</h1>
      <ul>
        <li><a href="/">Sobre</a></li>
        <li><a href="">Portfólio</a></li>
        <li><a href="/">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
