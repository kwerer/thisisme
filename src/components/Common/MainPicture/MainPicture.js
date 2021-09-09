import React, { useState } from "react";
import {
  Image,
  Button,
  Icon,
} from "semantic-ui-react";
import MainPictureMe from "../Images/MainPictureMeWOBackground.png";
import FormalPictureMe from "../Images/FormalPictureMe.jpg";
import styles from "./styles.module.css";
import { hiimjoseph } from "../Lists/Hiimjoseph";
function MainPicture() {
  return (
    <div className={styles.MainDashboard}>
      <div className={styles.PictureDiv}>
        <Image
          src={MainPictureMe}
          className={styles.Picture}
        />
      </div>
      <div className={styles.SubDashboard}>
        <div className={styles.SubDashboardBody}>
          <div
            className={styles.SubDashboardTitle}
          >
            Hi I'm Joseph!
          </div>
          <div
            className={styles.SubDashboardText}
          >
            <ul>
              {hiimjoseph.map((fact) => {
                return <li>{fact.fact}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPicture;
