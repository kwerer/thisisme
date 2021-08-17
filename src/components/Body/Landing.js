import React from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "../Common/Navbar/Navbar";
import styles from "./styles.module.css";
function Landing() {
  return (
    <Grid className={styles.MainGrid}>
      <Grid.Row columns="equal" className={styles.MainGridRow}>
        <Grid.Column></Grid.Column>
        <Grid.Column width={5}>
          <Navbar />
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>hello world</Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
