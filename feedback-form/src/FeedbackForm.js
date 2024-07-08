// src/FeedbackForm.js

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    rollno: '',
    className: '',
    feedback: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: '',
      age: '',
      rollno: '',
      className: '',
      feedback: '',
    });
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Roll No:
            <input
              type="text"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Class:
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Feedback</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Roll No</th>
                <th>Class</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.rollno}</td>
                  <td>{data.className}</td>
                  <td>{data.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
