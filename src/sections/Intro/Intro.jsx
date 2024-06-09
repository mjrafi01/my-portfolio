import styles from "./IntroStyles.module.css"
import ProfileImg from '../../assets/Untitled_design__1_-removebg-preview (2)-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import fbLight from '../../assets/facebook.png'
import fbDark from '../../assets/facebook.svg'


import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const fbIcon = theme === 'light' ? fbLight : fbDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="home" className={styles.container}>
      <div data-aos="fade-down-right" className={styles.colorModeContainer}>
        <img
          src={ProfileImg}
          className={styles.hero}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div data-aos="fade-down-left" className={styles.info}>
        <h1>
          MISSKAT 
          <br />
          JAHAN <br/>
          RAFE
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://facebook.com/mjrafi01" target="_blank">
            <img src={fbIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/mjrafi01" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/mjrafi01/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate about developing contemporary React web applications tailored for commercial enterprises.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
