import React from 'react';

const AdoptionForm = () => {
  return (
    <div style={styles.formContainer}>
      <h1>Adopt Your New Pet!</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Why do you want to adopt this pet?
          <textarea name="reason" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
};

export default AdoptionForm;
