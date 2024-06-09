import styles from './SkillsStyles.module.css'
import jsLogo from '../../assets/JS.jpg'; // Add appropriate image paths
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import reactLogo from '../../assets/react.png';
import nodeLogo from '../../assets/nodejs.png';
import mongoLogo from '../../assets/database-storage.png';
import expressJs from '../../assets/express.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HeadingTitle } from '../../common/HeadingTitle';

export const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
    const skills = [
        { name: "JavaScript", img: jsLogo },
        { name: "HTML", img: htmlLogo },
        { name: "CSS", img: cssLogo },
        { name: "React.js", img: reactLogo },
        { name: "Node.js", img: nodeLogo },
        { name: "MongoDB", img: mongoLogo },
        { name: "Express Js", img: expressJs },
      ];
  return (
    <section  className={styles.skills} id='skills'>
     
      <HeadingTitle  title='SKILLS'></HeadingTitle>
      <div data-aos="fade-up-right" className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img src={skill.img} alt={`${skill.name} logo`} />
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
export default  Skills;
