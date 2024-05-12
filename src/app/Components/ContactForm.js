import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function ContactForm() {

    const [isSubmitting, setIsSubmitting] = useState(false);
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
            setStateMessage('Message envoyé avec succès, merci !');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
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

        <div>

            <h2>Contactez-moi :</h2>

            <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Entrez votre nom" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="from_name" placeholder="Entrez votre email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" placeholder="Entrez votre message" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                    Envoyer
                </Button>

                {stateMessage && <p>{stateMessage}</p>}
            </Form>

        </div>
    );
};

