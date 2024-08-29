import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate authentication (replace this with real authentication logic)
    const { username, password } = credentials;
    if (username === 'vaibhav' && password === 'vaibhav') {
      onLogin(); // Redirect to dashboard on successful login
    } else {
      setError('Invalid credentials. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <Container style={styles.container}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>

        {error && (
          <Alert variant="danger" style={styles.status}>
            {error}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '20px',
    maxWidth: '400px',
    margin: 'auto'
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

export default Login;
