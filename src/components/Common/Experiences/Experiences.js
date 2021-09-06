import React from "react";
import styles from "./styles.module.css";
import {
  Header,
  Container,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import QlassroomLogo from "../Images/QlassroomLogoWOBackground.png";
function Experiences() {
  function handleClickLogo() {}
  return (
    <div className={styles.ExperienceMain}>
      <Header as="h2">
        Former Working Experiences
      </Header>
      <div className={styles.ExperienceBodyMain}>
        <div
          className={styles.FirstJobExperience}
        >
          <a
            href={"http://www.qlassroom.ai/"}
            className={styles.FirstJobPictureDiv}
          >
            <img
              src={QlassroomLogo}
              alt="QlassroomLogo"
              onClick={handleClickLogo}
              className={styles.FirstJobPicture}
            />
          </a>
          <div>My first tech-related job</div>
        </div>

        <div
          className={styles.SecondJobExperience}
        >
          heloo
        </div>
      </div>
    </div>
  );
}

export default Experiences;
