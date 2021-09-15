import React from "react";
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
function Experiences() {
  return (
    <div className={styles.ExperienceMain}>
      <VerticalTimeline>
        {TimelineExperiences.map((item) => {
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
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.company}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          );
        })}

        {TimelineProjects.map((item) => {
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
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      {/* create modal here */}
    </div>
  );
}

export default Experiences;
