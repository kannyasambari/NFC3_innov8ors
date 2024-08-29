import React from 'react';

const Home = () => {
  return (
    <div id="home" style={styles.section}>
      <h1>Welcome to Pet Adoption</h1>
      <p>Your perfect pet is waiting for you!</p>
    </div>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    textAlign: 'center'
  }
};

export default Home;
