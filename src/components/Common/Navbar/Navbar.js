import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { NavbarItems } from "../Lists/NavbarItems";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div className={styles.NavbarMain}>
      {NavbarItems.map((item) => {
        return <Button className={styles.NavItemIndiv}>{item}</Button>;
      })}
    </div>
  );
}

export default Navbar;
