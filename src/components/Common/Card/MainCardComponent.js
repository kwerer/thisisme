import React from "react";
import { CardComponentList } from "../Lists/CardComponentList";
import CardComponent from "./CardComponents/CardComponent";
import IndividualCardPage from "./CardComponents/IndividualCardPage";
import styles from "./styles.module.css";
import {
  Button,
  Header,
  Icon,
} from "semantic-ui-react";

function MainCardComponent(props) {
  const {
    aboutMeRenderComponent,
    setAboutMeRenderComponent,
  } = props;
  function handleClickCard(e) {
    setAboutMeRenderComponent(
      e.currentTarget.name
    );
  }
  function handleAboutMeBack() {
    setAboutMeRenderComponent("Start");
  }
  return (
    <>
      <Header className={styles.AboutMeHeader}>
        About Me
      </Header>
      {aboutMeRenderComponent === "Start" ? (
        <div className={styles.AboutMeTopRow}>
          {CardComponentList.map((item, key) => {
            return (
              <CardComponent
                id={key}
                ImageURL={item.ImageURL}
                name={item.name}
                description={item.description}
                handleClickCard={handleClickCard}
              />
            );
          })}
        </div>
      ) : (
        <div
          className={styles.IndividualCardPageDiv}
        >
          <IndividualCardPage
            handleAboutMeBack={handleAboutMeBack}
            aboutMeRenderComponent={
              aboutMeRenderComponent
            }
            setAboutMeRenderComponent={
              setAboutMeRenderComponent
            }
          />
        </div>
      )}
    </>
  );
}

export default MainCardComponent;
