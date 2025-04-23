import React from 'react'
import FormRow from '../Formsubmenu/FormRow';



const AddNewStudentForm = () => {
  return (
    <form className="student-form" noValidate>
    <FormRow label="Admission No." htmlFor="admissionNo">
      <input
        type="text"
        id="admissionNo"
        value="152"
        readOnly
        aria-readonly="true"
        tabIndex={-1}
      />
    </FormRow>
    <FormRow label="Admission Date" required htmlFor="admissionDate">
      <input type="text" id="admissionDate" defaultValue="12/04/2025" />
    </FormRow>
    <FormRow label="Reg No." required htmlFor="regNo">
      <input type="text" id="regNo" defaultValue="AOSE/2025152" />
    </FormRow>
    <FormRow label="Class" required htmlFor="class">
      <select id="class" defaultValue="">
        <option value="">--Select Class--</option>
      </select>
    </FormRow>
    <FormRow label="Section" required htmlFor="section">
      <select id="section" defaultValue="">
        <option value="">--Select Section--</option>
      </select>
    </FormRow>
    <FormRow label="Session" required htmlFor="session">
      <select id="session" defaultValue="">
        <option value="">--Select Session--</option>
      </select>
    </FormRow>
    <FormRow label="Roll No." required htmlFor="rollNo">
      <input type="text" id="rollNo" />
    </FormRow>
    <FormRow label="Medium" htmlFor="medium">
      <select id="medium" defaultValue="">
        <option value="">--Select Medium--</option>
      </select>
    </FormRow>
    <FormRow label="Stream" htmlFor="stream">
      <select id="stream" defaultValue="">
        <option value="">--Select Stream--</option>
      </select>
    </FormRow>
    <FormRow label="Name" required htmlFor="name">
      <input type="text" id="name" />
    </FormRow>
    <FormRow label="Gender" htmlFor="gender">
      <select id="gender" defaultValue="Male">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </FormRow>
    <FormRow label="Address1" htmlFor="address1">
      <input type="text" id="address1" />
    </FormRow>
    <FormRow label="Address2" htmlFor="address2">
      <input type="text" id="address2" />
    </FormRow>
    <div className="form-row place-row">
      <label htmlFor="place">Place</label>
      <select id="place" defaultValue="">
        <option value="">--Select Place--</option>
      </select>
      <button type="button" aria-label="Add place">
        +
      </button>
    </div>
    <FormRow label="DOB" required htmlFor="dob">
      <input type="text" id="dob" placeholder="dd/mm/yyyy" />
    </FormRow>
    <FormRow label="PIN" htmlFor="pin">
      <input type="text" id="pin" />
    </FormRow>
    <FormRow label="Nationality" htmlFor="nationality">
      <input type="text" id="nationality" />
    </FormRow>
    <FormRow label="Physical Status" htmlFor="physicalStatus">
      <select id="physicalStatus" defaultValue="">
        <option value="">--Select Physical Status--</option>
      </select>
    </FormRow>
    <FormRow label="Aadhar No." htmlFor="aadharNo">
      <input type="text" id="aadharNo" />
    </FormRow>
    <FormRow label="Phone" htmlFor="phone">
      <input type="text" id="phone" />
    </FormRow>
    <FormRow label="Mobile" required htmlFor="mobile">
      <input type="text" id="mobile" />
    </FormRow>
    <FormRow label="Email" htmlFor="email">
      <input type="text" id="email" />
    </FormRow>
    <FormRow label="Blood Group" htmlFor="bloodGroup">
      <select id="bloodGroup" defaultValue="NA">
        <option>NA</option>
      </select>
    </FormRow>
    <FormRow label="Religion" htmlFor="religion">
      <select id="religion" defaultValue="Hinduism">
        <option>Hinduism</option>
      </select>
    </FormRow>
    <FormRow label="Caste" htmlFor="caste">
      <select id="caste" defaultValue="">
        <option value="">--Select Caste--</option>
      </select>
    </FormRow>
    <FormRow label="Identity" htmlFor="identity">
      <input type="text" id="identity" />
    </FormRow>
    <FormRow label="Allergy" htmlFor="allergy">
      <input type="text" id="allergy" />
    </FormRow>
    <FormRow label="Account Head" htmlFor="accountHead">
      <textarea id="accountHead" rows="2" />
    </FormRow>
    <FormRow label="Remarks" htmlFor="remarks">
      <input type="text" id="remarks" />
    </FormRow>
    <FormRow label="Status" htmlFor="status">
      <select id="status" defaultValue="Active">
        <option>Active</option>
      </select>
    </FormRow>
  
  </form>
  )
}

export default AddNewStudentForm