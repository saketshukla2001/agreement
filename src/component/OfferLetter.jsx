import React, { useState } from "react";
import './OfferLetter.css';

const OfferLetter = () => {
  // Setting initial state for all the form fields
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    designation: "",
    location: "",
    dateOfCommencement: "",
    reportingBoss: "",
    ctc: "",
    basicPay: "",
    hra: "",
    travelAllowance: "",
    annualLeave: "",
    sickLeave: "",
    salary: "",
    targetPercentage: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateOffer = () => {
    return `
HSBE LIMITED
Corporate Office – Andheri Road Level 4 A Wing,
Dynasty Business Park, Mumbai
Maharashtra – 40005
EmailId: admin@shpropay.com

Offer Letter
Date- ${employeeDetails.dateOfCommencement}

Dear ${employeeDetails.name},

We are pleased to offer you the position of ${employeeDetails.designation} in ${employeeDetails.location} in HSBE LIMITED company on the following terms and conditions:

Date of Commencement:
Your Date of Appointment will be ${employeeDetails.dateOfCommencement}.

Position and Reporting Structure:
You will be performing the role of ${employeeDetails.designation} and will be assigned a reporting ${employeeDetails.reportingBoss} and control all sales staff reporting section leave and achieving targets once you join. The company has the sole discretion to change your position, reporting line, and responsibilities as required by business needs.

Probation:
You will be on probation for a period of three months or till an order of confirmation has been issued in writing, whichever is earlier. If your performance is found unsatisfactory during the probation period, then your probation period may be extended or your services may be terminated. During the probation period, you or the Company may end your employment by providing a one-month notice.

Compensation:
Your CTC per annum will be Rs. ${employeeDetails.ctc} (${parseInt(employeeDetails.ctc).toLocaleString()} Rupees only) as defined in the salary annexure. You will be covered under the company insurance policies as under:
- Mediclaim of Rs. 3,00,000 family floater (Employee + Spouse + 2 Children)
- Accidental disability benefit of Rs. 5,00,000

Annual Appraisal:
Your appraisal shall be subject to the Performance Management policy as designed and applicable to the Company. If your joining date is ${employeeDetails.dateOfCommencement}, you shall be eligible for the given policy.

Clause: As per the company, you have to install 7 sales apps. As per the 7 sales apps, you have to punch your attendance (Market Time- 9:30 am) and if you punch above 9:45 am, then automatically your attendance will be counted as half, and upload a selfie daily. In this case, your DA will be Rs. ____. At the end of the month, we will send you your salary slip.

Clause: Target given by your current boss. You have to achieve ${employeeDetails.targetPercentage}% of your target for the month. And if you achieve your 100% target, then you will receive incentives from the company, which may be money or goods. If you want to receive the Bonus incentive, then you have to achieve 125% of the target.

Salary: Your monthly salary is INR ${employeeDetails.salary}

CTC COMPONENTS
MONTHLY         ANNUAL
------------------------
Basic Pay       ${employeeDetails.basicPay}     ${employeeDetails.basicPay * 12}
Conveyance      ${employeeDetails.travelAllowance}  ${employeeDetails.travelAllowance * 12}
House Rent Allowance  ${employeeDetails.hra} ${employeeDetails.hra * 12}

TOTAL FIXED PAY  ${employeeDetails.salary} ${employeeDetails.ctc}

Domestic Travel Policy:
How to raise & claim for domestic trip expenses?
1. Login to the PeopleFirst web service from the side menu list, go to Travel & Guest House option.
2. Select ‘Create Request,’ enter necessary details for journey/stay, and submit for approval to L1.
3. Once the trip is completed, log in to PeopleFirst, search for your relevant trip by trip number, and click on the same.
4. Update details of your expenses in the respective tabs and submit for claim.
Claims cannot be done for dates exceeding 60 days from the date of travel.

Salary Revision:
Your salary will be reviewed annually as per company policy. Salary revisions are discretionary and will be subject to effective performance (Individual and company) and results.

Statutory and TDS Deductions:
Statutory amounts will be deducted from your salary as and when applicable such as Professional Tax, Income Tax, Provident Fund, and National Pension Scheme (NPS).

Leave:
Annual Leave (AL)
You will be eligible for ${employeeDetails.annualLeave} days of Annual Leave. These ${employeeDetails.annualLeave} leaves will be credited to your leave balance at the beginning of every quarter in advance.

Sick Leave (SL)
You will be eligible for ${employeeDetails.sickLeave} days of sick leave every year. SL cannot be carried forward to the next year. SL cannot be encashed.

Absence without Notice:
Absence without leave or remaining absent beyond the period of leave originally granted or subsequently extended, shall result in the termination of
your employment without any notice unless you return to work within 3 days from the commencement of such absence and provide satisfactory explanation to management regarding such absence.
`;
  };

  return (
    <div className="offer-letter-container">
      <h1 className="offer-letter-title">Offer Letter Generator</h1>
      <div className="form-container">
        <form className="offer-letter-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={employeeDetails.name}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Designation:
            <input
              type="text"
              name="designation"
              value={employeeDetails.designation}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Location (HQ):
            <input
              type="text"
              name="location"
              value={employeeDetails.location}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Date of Commencement:
            <input
              type="date"
              name="dateOfCommencement"
              value={employeeDetails.dateOfCommencement}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Reporting Boss:
            <input
              type="text"
              name="reportingBoss"
              value={employeeDetails.reportingBoss}
              onChange={handleInputChange}
            />
          </label>

          <label>
            CTC (Annual):
            <input
              type="number"
              name="ctc"
              value={employeeDetails.ctc}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Basic Pay:
            <input
              type="number"
              name="basicPay"
              value={employeeDetails.basicPay}
              onChange={handleInputChange}
            />
          </label>

          <label>
            HRA:
            <input
              type="number"
              name="hra"
              value={employeeDetails.hra}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Travel Allowance:
            <input
              type="number"
              name="travelAllowance"
              value={employeeDetails.travelAllowance}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Annual Leave (Days):
            <input
              type="number"
              name="annualLeave"
              value={employeeDetails.annualLeave}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Sick Leave (Days):
            <input
              type="number"
              name="sickLeave"
              value={employeeDetails.sickLeave}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Monthly Salary:
            <input
              type="number"
              name="salary"
              value={employeeDetails.salary}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Target Percentage for Incentives:
            <input
              type="number"
              name="targetPercentage"
              value={employeeDetails.targetPercentage}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>

      <h2 className="offer-letter-preview-title">Offer Letter Preview</h2>
      <textarea
        className="offer-letter-textarea"
        rows="20"
        cols="100"
        value={generateOffer()}
        readOnly
      />
    </div>
  );
};

export default OfferLetter;
