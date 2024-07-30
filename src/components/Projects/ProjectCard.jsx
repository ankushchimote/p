import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};



/////////history.json///////



// {
//   "role": "Software Engineer",
//   "organisation": "Google",
//   "startDate": "Sept, 2022",
//   "endDate": "Present",
//   "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
//   "imageSrc": "history/google.png"
// },

// {
//   "role": "UI Designer",
//   "organisation": "Mirosoft",
//   "startDate": "Aug, 2021",
//   "endDate": "Aug, 2022",
//   "experiences": ["Worked on Windows 11", "Designed the control panel"],
//   "imageSrc": "history/microsoft.png"
// },
