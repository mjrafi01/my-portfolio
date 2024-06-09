import styles from './ProjectsStyles.module.css';

import filmFanatic from '../../assets/film-fanatic.jpg';

import pakwaan from '../../assets/Pakwaan.jpg'

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
    
        <ProjectCard
          src={filmFanatic}
          link="https://github.com/mjrafi01/film-fanatics"
          h3="Film Fanatic"
          p="Movie Review"
        />
        <ProjectCard
         data-aos="flip-right" src={pakwaan}
          link="https://github.com/mjrafi01/Pakwaan-restaurant-client"
          h3="Pakwaan"
          p="Restaurant Website"
        />
        
      </div>
    </section>
  );
}

export default Projects;
