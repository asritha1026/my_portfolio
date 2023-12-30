import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import Icon from '../assets/images/linkedIn.jpg';
import logo from '../assets/images/logo.png';
export const NavBar =() =>{
    const [activeLink,setActiveLink] =useState('home');
    const [scrolled,setScrolled]=useState(false);
     useEffect (()=>{ 
        const onScroll = () => {
                if(window.scrollY>50){
                    setScrolled(true);
                }
                else{
                    setScrolled(false);
                }
        }
        window.addEventListener("scroll",onScroll);
        return()=>window.removeEventListener("scroll", onScroll);
    },[])
        const onUpdateActiveLink = (value) =>{
            setActiveLink(value);
        }
        return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects & certifications</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/asritha-cherukuri-a3a0b0208/"><img src={Icon} alt=""></img></a>
                </div>
                 {/* <button className="contactme" onClick={{} => console.log('connect')}><span>Let's Connect</span>
                 </button> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}
