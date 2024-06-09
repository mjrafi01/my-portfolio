
import styles from './NAvbar.module.css';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
      <li  onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('skills')}>Skills</li>
        <li onClick={() => handleScroll('projects')}>Projects</li>
        <li onClick={() => handleScroll('about')}>About Me</li>
        <li onClick={() => handleScroll('contact')}>Contact Me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
