import React, { useState } from 'react';

function AdmissionForm() {
  const [formData, setFormData] = useState({
    admissionNo: '',
    admissionDate: '',
    regNo: '',
    className: '',
    section: '',
    rollNo: '',
    medium: '',
    stream: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // You can send this to your backend using fetch/axios
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Student Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Admission No.:</label><br />
        <input type="text" name="admissionNo" value={formData.admissionNo} onChange={handleChange} /><br /><br />

        <label>Admission Date:</label><br />
        <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} /><br /><br />

        <label>Registration No.:</label><br />
        <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} /><br /><br />

        <label>Class:</label><br />
        <input type="text" name="className" value={formData.className} onChange={handleChange} /><br /><br />

        <label>Section:</label><br />
        <input type="text" name="section" value={formData.section} onChange={handleChange} /><br /><br />

        <label>Roll No.:</label><br />
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} /><br /><br />

        <label>Medium:</label><br />
        <input type="text" name="medium" value={formData.medium} onChange={handleChange} /><br /><br />

        <label>Stream:</label><br />
        <input type="text" name="stream" value={formData.stream} onChange={handleChange} /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
