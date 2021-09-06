import React from "react";
import styles from "../../Card/styles.module.css";
import {
  Button,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

function IndividualCardPage(props) {
  const {
    handleAboutMeBack,
    setAboutMeRenderComponent,
    aboutMeRenderComponent,
  } = props;

  return (
    <>
      <div className={styles.IndivCardPage}>
        <Header>this is my header</Header>
        <div>
          <div>wer</div>
          <div>1111</div>
        </div>
      </div>
    </>
  );
}

export default IndividualCardPage;
