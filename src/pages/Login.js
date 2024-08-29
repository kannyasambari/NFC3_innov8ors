import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackGround from '../images/hehe.jpg'; // Correct path to your image
import Logo from '../images/logo.avif'; // Correct path to your image

// Header Component
const Header = () => {
  return (
    <div style={styles.header}>
      <img src={Logo} alt="Logo" style={styles.logo} />
      <h1 style={styles.companyName}>Pawfect Partner</h1>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container>
        <p className="text-center">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

// Main Login Component
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
    <div style={styles.page}>
      <Header />
      <Container style={styles.container}>
        <div style={styles.loginContainer}>
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
        </div>
      </Container>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: `url(${BackGround})`, // Use template literals to insert the image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  container: {
    marginTop: '20px',
    maxWidth: '400px',
    margin: '0',
    backgroundColor: '#f8f9fa', // Light color that complements grey and white
    padding: '20px',
    borderRadius: '8px',
    position: 'absolute',
    right: '2cm', // Shift to the left by 2cm
    top: '50%',
    transform: 'translateY(-50%)', // Center vertically
    minHeight: '400px', // Increased height for elongation
  },
  form: {
    marginTop: '20px',
    width: '100%',
  },
  button: {
    marginTop: '10px',
  },
  status: {
    marginTop: '20px',
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  companyName: {
    fontFamily: '"Roboto", sans-serif', // Classy font
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '10px 0',
    marginTop: 'auto',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
};

export default Login;
