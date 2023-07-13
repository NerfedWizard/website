import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const EmailContactForm = () => {
    const form = useRef({
        who_sent: '',
        message: '',
        reply_to: ''
    }
    );

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('gmail_service', 'gmail_template_v1', form.current, 'x9UhByYCe3sWkQKuQ')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div className="emailform">
            <Form ref={form} onSubmit={sendEmail} >
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="email-form-group" type="text" name="who_sent" placeholder="Zaphod Beeblebrox" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="reply_to" placeholder="name@example.com" id="email-form-group" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message...</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <input type="submit" value="Send" />
            </Form>
        </div>
    );
};

export default EmailContactForm;