import React, { useState } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";
import Navbar from "../Common/Navbar/Navbar";
import styles from "./styles.module.css";
import ReactPlayerComponent from "../Common/ReactPlayer/ReactPlayerComponent";
import CardComponent from "../Common/Card/CardComponents/CardComponent";
import { CardComponentList } from "../Common/Lists/CardComponentList";
import Foreword from "../Common/Foreword/Foreword";
import IndividualCardPage from "../Common/Card/CardComponents/IndividualCardPage";
import MainCardComponent from "../Common/Card/MainCardComponent";
import Experiences from "../Common/Experiences/Experiences";

function Landing() {
  const [
    aboutMeRenderComponent,
    setAboutMeRenderComponent,
  ] = useState("Start");

  return (
    <Grid className={styles.MainGrid}>
      <Navbar />
      <Grid.Row
        className={styles.PlayerParentRow}
        id="Home"
      >
        <Grid.Column
          className={styles.PlayerParentCol}
        >
          <ReactPlayerComponent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        className={styles.ForewordParentRow}
        id="Foreword"
      >
        <Grid.Column
          className={styles.ForewordParentCol}
        >
          <Foreword />
        </Grid.Column>
      </Grid.Row>
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
      <Grid.Row
        className={styles.AboutMeParentRow}
        id="About Me"
      >
        <Grid.Column
          className={styles.AboutMeParentCol}
        >
          <MainCardComponent
            aboutMeRenderComponent={
              aboutMeRenderComponent
            }
            setAboutMeRenderComponent={
              setAboutMeRenderComponent
            }
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        className={styles.ForewordParentRow}
        id="Contact"
      >
        <Grid.Column
          className={styles.ForewordParentCol}
        >
          Contact
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
