import React from "react";
import ReactPlayer from "react-player";
import Video from "../Images/BadmintonPhotoDump1.jpg";
import styles from "./styles.module.css";

function ReactPlayerComponent() {
  return (
    <>
      <ReactPlayer
        className={styles.ReactPlayer}
        url={Video}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={styles.ReactPlayerOverlay}>
        hey there sir
      </div>
    </>
  );
}

export default ReactPlayerComponent;
