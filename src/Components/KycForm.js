import React, { useState } from "react";
import "../Style/KycForm.css";
import DropDown from "./KycDropDown";

const KycForm = () => {
  const [formData, setFormData] = useState({
    existingCustomer: "",
    floossCustomerID: "",
    cprNumber: "",
    monthlySalary: "",
    nationality: "",
    jobTitle: "",
    mobile: "",
    age: "",
    monthlySalaryBracket: "",
    companyName: "",
    kycStatus: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "reasonForRejection") {
        newErrors[key] = "Required";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <div className="form-inner-container">
        <h1>KYC Details</h1>
        <form className="loan-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <DropDown
              name="existingCustomer"
              value={formData.existingCustomer}
              options={["Yes", "No"]}
              placeholder="Are you Existing Customer?"
              onChange={handleChange}
              error={errors.existingCustomer}
            />
            <div className="form-group">
              <input
                type="text"
                name="floossCustomerID"
                placeholder="Floss Customer ID"
                value={formData.floossCustomerID}
                onChange={handleChange}
              />
              {errors.floossCustomerID && (
                <span className="error">{errors.floossCustomerID}</span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="cprNumber"
                placeholder="CPR Number"
                value={formData.cprNumber}
                onChange={handleChange}
              />
              {errors.cprNumber && (
                <span className="error">{errors.cprNumber}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && (
                <span className="error">{errors.companyName}</span>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <DropDown
              name="monthlySalaryBracket"
              value={formData.monthlySalaryBracket}
              options={["Below 500", "500-1000", "Above 1000"]}
              placeholder="Monthly Salary (Bracket)"
              onChange={handleChange}
              error={errors.monthlySalaryBracket}
            />
            <div className="form-group">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
              />
              {errors.jobTitle && (
                <span className="error">{errors.jobTitle}</span>
              )}
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-row">
            <div className="form-group right-column">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
            <div className="form-group right-column">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>
          </div>

          {/* Row 5 */}
          <div className="form-row">
            <DropDown
              name="nationality"
              value={formData.nationality}
              options={["Yes", "No"]}
              placeholder="Nationalities"
              onChange={handleChange}
              error={errors.nationality}
            />
            <DropDown
              name="kycStatus"
              value={formData.kycStatus}
              options={["Yes", "No"]}
              placeholder="KYC status"
              onChange={handleChange}
              error={errors.kycStatus}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default KycForm;
