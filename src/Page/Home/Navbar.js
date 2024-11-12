import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
 
  const toggleDark = () =>{
    document.body.classList.toggle('dark');
  }

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="myNavbar">
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <a 
        className={`navHumburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
      </a>
      <div className={`navbarItems ${navActive ? "active moreActive" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbarContent"
            >
              Home
            </Link>
          </li>
          <li>
          <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbarContent"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbarContent"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbarActiveContent"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbarContent"
            >
              Experiences
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbarActiveContent"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
      <div className="dark" onClick={toggleDark}>
        <img src='./img/lightIcon.png' />
      </div>
    </nav>
  );
}

export default Navbar;