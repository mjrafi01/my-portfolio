// src/AboutMe.js


import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div id='about' className={styles.aboutme}>
       

      <h1 className={styles.title} data-aos="fade-right">About Me</h1>
      <p data-aos="fade-left"> I am a MERN stack developer with a passion for frontend development. Currently pursuing a Master's degree in Software Engineering, I've built a strong foundation in web technologies.</p>
      
      <p  data-aos="fade-right">Bringing creative ideas to life through code and tackling new challenges excites me. My goal is to create engaging user experiences and high-quality web applications.</p>
      
      <p data-aos="fade-left">Outside of work, I enjoy coding, watching movies, and cooking, which keep me balanced and inspired.</p>
      
      <p data-aos="fade-right">Always open to new opportunities and collaborations. Feel free to explore my portfolio and reach out to discuss potential projects. Let's create something amazing together!</p>
    </div>
  );
}

export default AboutMe;
