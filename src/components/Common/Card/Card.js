import React from "react";
import { Card, Image } from "semantic-ui-react";
import styles from "./styles.module.css";
function CardComponent(props) {
  const { name, description, ImageURL } = props;
  function handleClickCard() {
    console.log("sup");
  }
  return (
    <Card onClick={handleClickCard} className={styles.CardComponent}>
      <Image src={ImageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>

        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CardComponent;
