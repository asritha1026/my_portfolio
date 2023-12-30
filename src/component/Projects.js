
import projImg1 from "../assets/images/projImg1.png";
import projImg2 from "../assets/images/projImg2.jpg";
import projImg3 from "../assets/images/projImg3.jpg";
import projImg4 from "../assets/images/projImg4.jpg";
import projImg5 from "../assets/images/projImg5.jpg";
import projImg6 from "../assets/images/projImg6.jpg";
import AWS from "../assets/images/AWS.jpg";
import Final from "../assets/images/FINAL.jpg"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
export const Projects =() =>{
    const projects = [
        {
          title: "Sentiment Analysis of Vaccination for Covid-19",
          description: "The Object of the project Is to get the opinion of people regarding vaccination during covid-19 2nd wave",
          imgUrl: projImg1,
        },
        {
            title: "Kathakali Face Expression Detection Using Deep Learning Techniques",
            description: "The project objective is to detect the expression from image data using deep learning Techniques.",
            imgUrl: projImg2,
          },
          {
            title: "Web Application on Product Trading",
            description: "The Object of the project is the user will be able to create account, trade plates for interested users",
            imgUrl: projImg3,
          },
          {
            title: "Movie Ticket Reservation System",
            description: "Developed a movie ticket reservation system",
            imgUrl: projImg4,
          },
          {
            title: "Hospital Appointment Management System",
            description: "Implemented role-based access control (Admin, Doctor, Patient) for secure data access.",
            imgUrl: projImg5,
          },
          {
            title: "TicTacToe game Implementation using SpringBoot",
            description: "Implemented 3D-Implementation of TicTacToe using SpringBoot.",
            imgUrl: projImg6,
          },

        ];

    const certificates =[
        {
            title:"AWS Certified Developer - Associate",
            imgUrl:AWS,
        },
        {
            title:"Amrita VishwaVidya Peetham",
            imgUrl:Final,
        }
    ];
        return(
            <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h3>Projects&Certifications</h3>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certification</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
            
    );

}
