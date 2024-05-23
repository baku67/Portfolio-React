import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function ContactForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    // API email.js
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          serviceId,
          templateId,
          e.target,
          publicKey
        )
        .then(
          (result) => {
            setIsSubmitting(false);
            setIsSubmited(true);
          },
          (error) => {
            setStateMessage('Il y a eu une erreur, veuillez réessayer plus tard ou utiliser une autre méthode de contact.');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };



    return (


        <div className="contact-section1">

        {!isSubmited ? (

            <div>
                <h3 className="contactFormHeader">Envoyez-moi un message :</h3>
                <Form onSubmit={sendEmail}>
                    <Form.Group className="formGroup" controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" name="user_name" placeholder="Entrez votre nom" />
                    </Form.Group>

                    <Form.Group className="formGroup" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="from_name" placeholder="Entrez votre email" />
                        <Form.Text className="text-mutedd">
                        Dans le seul but de vous recontacter.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="formGroup" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" placeholder="Entrez votre message" />
                    </Form.Group>

                    <div style={{display:"inline-flex", width: "100%", justifyContent: "end"}}>
                        <Button variant="primary" type="submit" disabled={isSubmitting} className="contactForm-sendBtn" >
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>Envoyer</span>
                        </Button>

                        {stateMessage && <p>{stateMessage}</p>}

                        {isSubmitting && 
                            <div className="iconAndText">
                                <FontAwesomeIcon icon={faSpinner} className="faIcon faSpinner" />
                                <span>Envoi en cours</span>
                            </div>
                        }
                    </div>

                </Form>
            </div>

        ) : (

            <div className="iconAndText">
                <FontAwesomeIcon icon={faCircleCheck} className="faIcon" />
                <span>Votre message a bien été envoyé, <span style={{fontWeight:"bold", color:"var(--primary-cyan)"}}>merci</span> !</span>
            </div>

        )}

        </div>

    );
};

