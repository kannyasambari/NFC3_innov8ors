import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    axios.post('/api/contact', formData)
      .then((response) => {
        setSubmissionStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setSubmissionStatus('Error sending message. Please try again.');
        console.error('Error sending message:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container style={styles.container}>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {submissionStatus && (
          <Alert variant={submissionStatus.startsWith('Error') ? 'danger' : 'success'} style={styles.status}>
            {submissionStatus}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '20px'
  },
  form: {
    marginTop: '20px'
  },
  button: {
    marginTop: '10px'
  },
  status: {
    marginTop: '20px'
  }
};

export default ContactUs;
