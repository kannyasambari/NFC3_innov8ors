import React from 'react';

function AdoptionForm() {
  return (
    <div>
      <h1>Adopt a Pet</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdoptionForm;
