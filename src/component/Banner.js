import profile from '../assets/images/profile.JPG';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
export const Banner =() =>{
    
        return(
            <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
              
              <div>
                <h2>{`Hi! I'm Asritha Cherukuri`}</h2>
                <h4>Full Stack Developer</h4><br></br>
                  <p>I am a Full Stack Developer located in Charlotte, North Carolina. I hold a Bachelor's degree in Computer Science and Engineering from Amrita University in India and have successfully completed my master's in Computer Science at The University of North Carolina at Charlotte. My enthusiasm revolves around creating innovative applications and embracing challenges throughout the development process. I possess a wealth of expertise in various web technologies and have hands-on experience deploying applications on both AWS and Azure cloud platforms. Delve into my portfolio to explore my projects and experiences, gaining insights into my professional journey.</p>
                  <div className='profile-optins'>
                  <a href='Resume.pdf' className='resume-link' target='_blank' rel='noopener noreferrer'>
                         <button className="btn highlighted-btn"><b>View Resume</b></button>
                   </a>
                    <a href='Resume.pdf' download='Resume.pdf' className='resume-link'>
                        <button className=" btn highlighted-btn"><b>Download Resume</b></button>
                    </a>
                  </div>
              </div>
           
          </Col>
          <Col xs={10} md={6} xl={5}>
                <div>
                  <img src={profile} alt="Header Img"/>
                </div>
          
          </Col>
        </Row>
      </Container>
    </section>
        
    );

}
