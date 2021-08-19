import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import Navbar from "../Common/Navbar/Navbar";
import styles from "./styles.module.css";
import ReactPlayerComponent from "../Common/ReactPlayer/ReactPlayerComponent";
import CardComponent from "../Common/Card/Card";
import BadmintonHeader from "../Common/Images/BadmintonPhotoDump1.jpg";
function Landing() {
  return (
    <Grid className={styles.MainGrid}>
      <Grid.Row columns="equal" className={styles.MainGridRow}>
        <Grid.Column>
          {/* add hamburger menu here */}
          <Icon name="keyboard outline" color="blue" />
        </Grid.Column>
        <Grid.Column width={5}>
          <Navbar />
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row className={styles.PlayerParentRow}>
        <Grid.Column className={styles.PlayerParentCol}>
          <ReactPlayerComponent />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className={styles.AboutMeParentRow}>
        <Grid.Column className={styles.AboutMeParentCol}>
          <Header className={styles.AboutMeHeader}>About Me</Header>
          <div className={styles.AboutMeTopRow}>
            <CardComponent
              ImageURL={BadmintonHeader}
              name="Badminton & Fitness"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
            <CardComponent
              ImageURL={BadmintonHeader}
              name="Work(!)"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
            <CardComponent
              ImageURL={BadmintonHeader}
              name="Army Days"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
            <CardComponent
              ImageURL={BadmintonHeader}
              name="--2020--"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
          </div>
          <div className={styles.AboutMeBottomRow}>
            <CardComponent
              ImageURL={BadmintonHeader}
              name="Badminton & Fitness"
              description="Badminton and Fitness and the many many rewards that came with it"
            />

            <CardComponent
              ImageURL={BadmintonHeader}
              name="JC Days"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
            <CardComponent
              ImageURL={BadmintonHeader}
              name="--2020--"
              description="Badminton and Fitness and the many many rewards that came with it"
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
