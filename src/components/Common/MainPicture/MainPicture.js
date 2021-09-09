import React, { useState } from "react";
import {
  Image,
  Button,
  Icon,
} from "semantic-ui-react";
import MainPictureMe from "../Images/MainPictureMe.jpg";
import styles from "./styles.module.css";
import { hiimjoseph } from "../Lists/Hiimjoseph";
function MainPicture() {
  const [isFormal, setIsFormal] = useState(true);
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
            Hi I'm Joseph.
          </div>
          <div
            className={styles.SubDashboardText}
          >
            <ul>
              <li>
                {hiimjoseph.map((fact) => {
                  return fact.fact;
                })}
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div
          className={styles.SubDashboardButton}
        >
          <Button>
            {isFormal
              ? "Other Side Of Me!"
              : "About Me!"}
            <Icon name="arrow right" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainPicture;
