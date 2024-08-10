import { useState } from 'react';
import styles from "./Skill.module.css";

export default function Skill() {
  const [skills] = useState([
    { name: "HTML5", img: "IconPhoto/html.png" },
    { name: "CSS3", img: "IconPhoto/css.png" },
    { name: "JavaScript", img: "IconPhoto/js.png" },
    { name: "JSON", img: "/public/IconPhoto/json.png" },
    { name: "Bootstrap", img: "IconPhoto/bootstrap.png" },
    { name: "React", img: "IconPhoto/react.png" },
    { name: "Redux", img: "IconPhoto/redux.png" },
    { name: "npm", img: "IconPhoto/npm.png" },
    { name: "Vite", img: "IconPhoto/vite.png" },
    { name: "Figma", img: "IconPhoto/figma.png" }
  ]);

  return (
    <section className={styles.secSkills}>
      <h1>My Skills</h1>
      <div className={styles.content}>
        {skills.map((skill, index) => (
          <div className={styles.skilly} key={index}>
            <div className={styles.imgSkills}>
              <img src={skill.img} alt={skill.name} />
            </div>
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
