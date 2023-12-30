import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
export const Experience =() =>{
        return(
         <section className="experience" id="experience">
         <Container>
         <Row className="aligh-items-center">
         <h2>Experience</h2>
			{/* *******  Education Section Starts  *******   */}
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="08/2022 - 12/2023"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >
    <data></data>
    <h3>Master Degree <br/>(Computer Science)</h3>
    <p>University of North Carolina</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="05/2023 - 08/2023"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />} // Use an empty icon to hide it

  >
    <h3>Lead Software Developer</h3>
    <p>Gradient Connect-Texas</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="01/2021 - 07/2022"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />} // Use an empty icon to hide it

  >
    <h3>FullStack Developer</h3>
    <p>Cognizant - India</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="06/2017 - 06/2021"
    iconStyle={{ background: '#000', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >
    <h3>Bachelor Degree</h3>
    <p>Amrita University - India</p>
  </VerticalTimelineElement>
</VerticalTimeline>

            
		  
            </Row>
            </Container>
            
	
	    
		</section>

        
    );

}

  
