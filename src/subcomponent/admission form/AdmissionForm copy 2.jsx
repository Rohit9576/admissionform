import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    admissionNo: '',
    admissionDate: '',
    regNo: '',
    class: '',
    section: '',
    rollNo: '',
    medium: '',
    stream: '',
    name: '',
    gender: '',
    address1: '',
    address2: '',
    place: '',
    dob: '',
    pin: '',
    nationality: '',
    physicalStatus: '',
    aadharNo: '',
    phone: '',
    mobile: '',
    email: '',
    bloodGroup: '',
    religion: '',
    cast: '',
    identity: '',
    allergy: '',
    accountHead: '',
    remarks: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {Object.entries({
        admissionNo: 'Admission No.',
        admissionDate: 'Admission Date*',
        regNo: 'Reg No.*',
        class: 'Class*',
        section: 'Section*',
        rollNo: 'Roll No.*',
        medium: 'Medium',
        stream: 'Stream',
        name: 'Name*',
        gender: 'Gender',
        address1: 'Address 1',
        address2: 'Address 2',
        place: 'Place',
        dob: 'DOB*',
        pin: 'PIN',
        nationality: 'Nationality',
        physicalStatus: 'Physical Status',
        aadharNo: 'Aadhar No.',
        phone: 'Phone',
        mobile: 'Mobile*',
        email: 'Email',
        bloodGroup: 'Blood Group',
        religion: 'Religion',
        cast: 'Cast',
        identity: 'Identity',
        allergy: 'Allergy',
        accountHead: 'Account Head',
        remarks: 'Remarks',
        status: 'Status',
      }).map(([key, label]) => (
        <div key={key}>
          <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
          <Input
            type={key.includes('Date') || key === 'dob' ? 'date' : 'text'}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required={label.includes('*')}
          />
        </div>
      ))}

      <div className="md:col-span-2 text-right">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default AdmissionForm;
