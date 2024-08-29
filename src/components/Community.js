import React, { useState } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Join Our Volunteer Program',
      date: '2024-08-29',
      content: 'We are looking for volunteers to help with our pet adoption events. Contact us to get involved!'
    },
    {
      id: 2,
      title: 'Community Pet Care Tips',
      date: '2024-08-28',
      content: 'Check out our latest blog post on how to care for your new pet. Tips and tricks for a happy and healthy pet!'
    }
  ]);
  
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [submissionStatus, setSubmissionStatus] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const newPostData = {
        id: posts.length + 1,
        title: newPost.title,
        date: new Date().toISOString().split('T')[0],
        content: newPost.content
      };
      setPosts((prevPosts) => [newPostData, ...prevPosts]);
      setNewPost({ title: '', content: '' });
      setSubmissionStatus('Post submitted successfully!');
    } else {
      setSubmissionStatus('Please fill in all fields.');
    }
  };
  
  return (
    <Container style={styles.container}>
      <h1>Community</h1>
      
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={newPost.content}
            onChange={handleChange}
            required
            rows={3}
          />
        </Form.Group>

        <Button type="submit" variant="primary" style={styles.button}>
          Submit Post
        </Button>

        {submissionStatus && (
          <Alert variant={submissionStatus.startsWith('Error') ? 'danger' : 'success'} style={styles.status}>
            {submissionStatus}
          </Alert>
        )}
      </Form>

      <div style={styles.postsContainer}>
        {posts.map(post => (
          <Card key={post.id} style={styles.card}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '20px'
  },
  form: {
    marginBottom: '20px'
  },
  button: {
    marginTop: '10px'
  },
  postsContainer: {
    marginTop: '20px'
  },
  card: {
    marginBottom: '20px'
  },
  status: {
    marginTop: '20px'
  }
};

export default Community;
