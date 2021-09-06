import React from "react";
import { Card, Image } from "semantic-ui-react";
import styles from "../../Card/styles.module.css";

function CardComponent(props) {
  const {
    name,
    description,
    ImageURL,
    setAboutMeRenderComponent,
    handleClickCard,
  } = props;

  return (
    <Card
      className={styles.CardComponent}
      name={name}
      onClick={handleClickCard}
    >
      <Image src={ImageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>

        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CardComponent;
