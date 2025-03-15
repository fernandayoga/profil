import { useState, useEffect } from "react";

import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'
import NavIcon2 from '../assets/img/github-icon-1.svg'
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY > 50){
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = "" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#projects2" className={activeLink === 'projects2' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Certification</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact Me</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/fernanda-yoga-kurniawan-186b20295/"> <img src = {NavIcon1} alt=""/> </a>
                <a href="https://github.com/fernandayoga"> <img src = {NavIcon2} alt=""/> </a>
                <a href="https://www.instagram.com/fernanddyoga_/"> <img src = {NavIcon3} alt=""/> </a>
            </div>
            <button className="vvd"onClick={() => window.open("https://www.linkedin.com/in/fernanda-yoga-kurniawan-186b20295/")}>
              <span>Let's Connect</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
