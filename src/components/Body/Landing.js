import React, { useState } from "react";
import {
  Button,
  Grid,
  Divider,
  Icon,
} from "semantic-ui-react";
import Navbar from "../Common/Navbar/Navbar";
import styles from "./styles.module.css";
import Experiences from "../Common/Experiences/Experiences";
import MainPicture from "../Common/MainPicture/MainPicture";

function Landing() {
  return (
    <Grid className={styles.MainGrid}>
      <Navbar />
      <Grid.Row
        className={styles.PlayerParentRow}
        id="About Me"
      >
        <Grid.Column
          className={styles.PlayerParentCol}
        >
          <MainPicture />
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row
        className={styles.ExperiencesParentRow}
        id="Experiences"
      >
        <Grid.Column
          className={styles.ExperiencesParentCol}
        >
          <Experiences />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
