import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact =() =>{
    const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n7qhpoh', 'template_ju78m2p', form.current, 'CS41Wsc2VARFbg6oy')
    .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        // Reset the form
         form.reset();
    }, (error) => {
        console.log(error.text);
    });
      };
      return(
        <section className="contact" id="contact">
      <Container>
      <h3>Get In Touch</h3>
      <Row className="align-items-center">
       <form ref={form} onSubmit={sendEmail}>
       <Col size={12} sm={6} className="px-1">
           <label>Name</label>
           <input type="text" name="user_name" />
           </Col>
           <Col size={12} sm={6} className="px-1">
             <label>Email</label>
             <input type="email" name="user_email" />
             </Col>
             <Col size={12} sm={6} className="px-1">
             <label>Message</label>
               <textarea name="message" />
               </Col>
               
              <button className="submitform btn highlighted-btn" type="submit" value="Send" ><b>Submit</b></button>
          
             </form>
             </Row>
      </Container>
        </section>
            
    );

}