import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { TimelineExperiences } from "../Lists/TimelineExperiences";
import { TimelineProjects } from "../Lists/TimelineProjects";
import {
  Modal,
  Button,
  Image,
  Header,
} from "semantic-ui-react";
import { modalList } from "../Lists/Modals";
import ComingSoon from "../Images/ComingSoon.jpg";

function Experiences() {
  const [open, setOpen] = useState(false);
  const [
    modalButtonDisplay,
    setModalButtonDisplay,
  ] = useState(null);

  function openModal(id) {
    setOpen(true);
    setModalButtonDisplay(id);
    console.log(id, "id");
    // console.log(
    //   modalButtonDisplay.target.id,
    //   "here"
    // );
  }
  return (
    <div className={styles.ExperienceMain}>
      <div className={styles.ExperienceMainTitle}>
        My Journey
      </div>
      <VerticalTimeline>
        {TimelineExperiences.map(
          (item, index) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #000",
                }}
                date={item.when}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company}
                </h4>
                <p>{item.description}</p>
                <div className={styles.ButtonDiv}>
                  <Button
                    onClick={(id) =>
                      openModal(id)
                    }
                    id={item.title}
                    className={
                      styles.ClickMeButton
                    }
                  >
                    Click Me!
                  </Button>
                </div>
              </VerticalTimelineElement>
            );
          }
        )}

        {TimelineProjects.map((item, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date={item.when}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<PersonPinIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.projectName}
              </h3>
              <p>{item.description}</p>
              <div className={styles.ButtonDiv}>
                <Button
                  onClick={(id) => openModal(id)}
                  id={item.projectName}
                  className={styles.ClickMeButton}
                >
                  Click Me!
                </Button>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        className={styles.ModalOverall}
      >
        <Modal.Header>
          {/* returns null if the user has not clicked on anything */}
          {modalButtonDisplay != null
            ? modalButtonDisplay.target.id
            : null}
        </Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src={
              modalButtonDisplay != null
                ? modalList[
                    modalButtonDisplay.target.id
                  ].image
                : ComingSoon
            }
            className={styles.ModalImage}
          />
          <Modal.Description>
            <div>
              {modalButtonDisplay != null
                ? modalList[
                    modalButtonDisplay.target.id
                  ].description
                : null}
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="black"
            onClick={() => setOpen(false)}
          >
            Cool!
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default Experiences;
