import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
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
      <form onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    );
};

