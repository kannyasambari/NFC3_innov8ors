import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListAPet = () => {
  const [pet, setPet] = useState({
    name: '',
    breed: '',
    age: '',
    vaccinated: false,
    description: '',
    image: null,
    type: 'dogs'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setPet((prevPet) => ({
      ...prevPet,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    const formData = new FormData();
    formData.append('name', pet.name);
    formData.append('breed', pet.breed);
    formData.append('age', pet.age);
    formData.append('vaccinated', pet.vaccinated);
    formData.append('description', pet.description);
    formData.append('type', pet.type);
    if (pet.image) {
      formData.append('image', pet.image);
    }

    axios.post('/api/pets', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(() => {
        setSubmissionStatus('Pet listed successfully!');
        setPet({ name: '', breed: '', age: '', vaccinated: false, description: '', image: null, type: 'dogs' });
      })
      .catch(() => {
        setSubmissionStatus('Error listing pet. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>List a Pet for Adoption</h1>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={pet.type}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
              <option value="rabbits">Rabbits</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={pet.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              type="text"
              name="breed"
              value={pet.breed}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={pet.age}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formVaccinated">
            <Form.Check
              type="checkbox"
              name="vaccinated"
              checked={pet.vaccinated}
              onChange={handleChange}
              label="Vaccinated"
              style={styles.checkbox}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={pet.description}
              onChange={handleChange}
              required
              rows={3}
              style={styles.input}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.fileInput}
            />
          </Form.Group>

          <div style={styles.buttonContainer}>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              style={styles.button}
            >
              {isSubmitting ? 'Submitting...' : 'List Pet'}
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              variant="secondary"
              style={styles.backButton}
            >
              Back to Home
            </Button>
          </div>

          {submissionStatus && (
            <Alert variant={submissionStatus.startsWith('Error') ? 'danger' : 'success'} style={styles.status}>
              {submissionStatus}
            </Alert>
          )}
        </Form>
      </div>
    </Container>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  container: {
    width: '80%',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#343a40'
  },
  form: {
    marginTop: '10px'
  },
  input: {
    borderRadius: '4px',
    borderColor: '#ced4da'
  },
  checkbox: {
    marginTop: '10px'
  },
  fileInput: {
    borderRadius: '4px',
    borderColor: '#ced4da'
  },
  button: {
    marginTop: '10px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  status: {
    marginTop: '20px'
  },
  backButton: {
    marginTop: '10px',
    width: '150px'
  }
};

export default ListAPet;
