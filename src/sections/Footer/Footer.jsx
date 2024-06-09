import styles from './FooterStyles.module.css';
import fbLight from '../../assets/facebook.png'
import fbDark from '../../assets/facebook.svg'


import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
function Footer() {
  const { theme, toggleTheme } = useTheme();

 
  const fbIcon = theme === 'light' ? fbLight : fbDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Misskat Jahan Rafe. <br />
        All rights reserved.
      </p>
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
    </section>
  );
}

export default Footer;
