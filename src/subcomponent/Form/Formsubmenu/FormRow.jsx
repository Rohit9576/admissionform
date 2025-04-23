import React from 'react'


const FormRow = ({ label, required, children, htmlFor }) => {
  return (
    <div className="form-row">
    <label htmlFor={htmlFor}>
      {label}
      {required && <span className="required">*</span>}
    </label>
    {children}
  </div>
  )
}

export default FormRow;
