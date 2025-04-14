import React from "react";
import "./AdmissionForm.css";
import Buttons from "./Buttons";
// import Button from "./button";

const AdmissionForm = () => {
    return (
        <div>
            <div className="add-new-stu">add new student</div>
            <div>
                <Buttons />
            </div>

            <form className="admission-form">

                <div>
                    <label>Admission No.</label>
                    <input type="text" name="admissionNo" />
                </div>
                <div>
                    <label>Admission Date*</label>
                    <input type="date" name="admissionDate" required />
                </div>
                <div>
                    <label>Registration No.*</label>
                    <input type="text" name="regNo" required />
                </div>
                <div>
                    <label>Class*</label>
                    <select name="class">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>

                </div>

                <div>
                    <label>Section*</label>
                    <select name="section">
                        <option value="">select</option>
                        <option value="">a</option>
                        <option value="male">b</option>
                        <option value="female">c</option>
                        <option value="other">d</option>
                    </select>
                </div>
                <div>
                    <label>Roll No.*</label>
                    <input type="text" name="rollNo" required />
                </div>
                <div>
                    <label>Medium</label>
                    <select name="medium">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Stream</label>
                    <select name="stream">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Name*</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Gender</label>
                    <select name="gender">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Address 1</label>
                    <textarea name="address1"></textarea>
                </div>
                <div>
                    <label>Address 2</label>
                    <textarea name="address2"></textarea>
                </div>
                <div>
                    <label>Place</label>
                    <select name="place">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Date of Birth*</label>
                    <input type="date" name="dob" required />
                </div>
                <div>
                    <label>PIN</label>
                    <input type="text" name="pin" />
                </div>
                <div>
                    <label>Nationality</label>
                    <input type="text" name="nationality" />
                </div>
                <div>
                    <label>Physical Status</label>
                    <select name="physical status">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Aadhar No.</label>
                    <input type="text" name="aadhar" />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" />
                </div>
                <div>
                    <label>Mobile*</label>
                    <input type="text" name="mobile" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Blood Group</label>
                    <select name="blood group">
                        <option value="">na</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Religion</label>
                    <select name="religion">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Caste</label>
                    <select name="cast">
                        <option value="">select</option>
                        <option value="">10th</option>
                        <option value="male">11th</option>
                        <option value="female">12th</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Identity</label>
                    <input type="text" name="identity" />
                </div>
                <div>
                    <label>Allergy</label>
                    <input type="text" name="allergy" />
                </div>
                <div>
                    <label>Account Head</label>
                    <input type="text" name="accountHead" />
                </div>
                <div>
                    <label>Remarks</label>
                    <textarea name="remarks"></textarea>
                </div>
                <div>
                    <label>Status</label>
                    <select name="status">
                        <option value="">Select</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="bn">


                    <button className="form-submit">submit</button>
                    <button className="form-submit">cancle</button>
                </div>

            </form>
        </div>
    );
};

export default AdmissionForm;