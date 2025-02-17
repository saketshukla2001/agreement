import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/style.css';
import myImage from "../assets/logo.png"
import headImg from "../assets/Picture1.png"

const PdfGenerator = () => {

  const [images, setImages] = useState([]);


  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    designation: "",
    location: "",
    dateOfCommencement: "",
    reportingBoss: "",
    ctc: "",
    ctc_word: "",
    basicPay: "",
    hra: "",
    travelAllowance: "",
    annualLeave: "",
    sickLeave: "",
    salary: "",
    targetPercentage: "",
    imageUpload: ""
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
  };


  const generateOffer = () => {
    return (
      <>
        HSBE LIMITED <br />
        Corporate Office – Andheri Road Level 4 A Wing,  <br />
        Dynasty Business Park, Mumbai <br />
        Maharashtra – 40005 <br />
        <p style={{ textAlign: "right" }} >EmailId: admin@shpropay.com</p> <br />
        <div style={{ backgroundColor: "black", height: "3px" }}></div>
        <p style={{ textAlign: "center" }} width={300}>Offer Letter</p>

        <div style={{ textAlign: "right" }}>
          Date - {employeeDetails.dateOfCommencement}
        </div>


        <div>
          Dear. {employeeDetails.name} <br />
          <br />
        </div>


        We are pleased tooffer you the position of {employeeDetails.designation} in Uttar Pradesh head quarter noida in HSBE LIMITED
        company on the following terms and conditions: <br />

        <br />
        Date of Commencement: <br />
        Your Date of Appointment will be {employeeDetails.dateOfCommencement}. <br />
        <br />
        Position and Reporting Structure: <br />
        You will be performing therole of {employeeDetails.designation} and will be assigned a reporting {employeeDetails.reportingBoss}
        and control all sales staff repotting section leave and achieve target once you join. The company hasthe sole discretion
        to change your position, reporting line and responsibilities as required by business needs <br />

        <br />
        Probation: <br />
        You will be on probation for a period of three months or till order of confirmation has been issued in writing, whichever is
        earlier. If your performance is found unsatisfactory during the probation period, then your probation period may be extended
        or your services may be terminated. During the probation period, you or the Companymay end your employment byproviding
        a one-month notice. <br />

        <br />
        Compensation: <br />
        Your CTC per annum will be Rs. {employeeDetails.ctc} ({employeeDetails.ctc_word}) as
        defined in the salary annexure. You will be covered under the company insurance policies as under – Mediclaim of Rs.3,00,000 family floater (Employee + Spouse + 2 Children) Accidental disability benefit of
        Rs.5,00,000. <br />

        <br />
        Annual Appraisal: <br />
        Your appraisal shall be subject to the Performance Management policyas designed and applicable to Company. If your joining
        date is 21/Jan/2025, you shall be eligible for the given policy. <br />

        <br />
        Clause: As per the company you have to install Tankha App you have to punch your attendance
        (Market Time- 9:30 am) and if you punch above 9:45 am then automatically your attendance will be counted half
        and upload selfie daily. In this case your DA will be Rs . At the end of the month, we will send you your salary slip.
        Clause: Target given by your current boss. You have to achieve 70% of your target of the month. And if you achieve
        your 100% target then you will receive incentives from company, it may be money or goods. <br />
        <br />
        <p style={{ fontWeight: "bold", fontFamily: "initial" }}>And if you want to receive Bonus incentive then you have to achieve your 125% of target.</p>

        <br />

        <br />
        Salary: Your monthly salary is INR . {employeeDetails.salary} <br />
        <br />

        <table style={{ borderCollapse: "collapse", margin: "20px", width: "80%", fontFamily: "serif" }}>


          <tr>
            <th>CTC COMPONENTS</th>
            <th>MONTHLY</th>
            <th>ANNUAL</th>
          </tr>

          <tr>
            <th colSpan={3}>A. Fixed pay</th>
          </tr>

          <tr>
            <td>Basic Pay</td>
            <td>{employeeDetails.basicPay * 1}</td>
            <td>{employeeDetails.basicPay * 12}</td>
          </tr>

          <tr>
            <th colSpan={3}>Choice pay</th>
          </tr>

          <tr>
            <td>DA & TA</td>
            <td>{employeeDetails.travelAllowance * 1}</td>
            <td>{employeeDetails.travelAllowance * 12}</td>
          </tr>

          <tr>
            <td>Fuel& maintenance</td>
            <th colSpan={2}>Refer to Annexure 1</th>
          </tr>

          <tr>
            <td>Leave travel allowance</td>
            <th colSpan={2}>Refer to Annexure 1</th>
          </tr>



          <tr>
            <td>Medical reimbursement</td>
            <th colSpan={2}>Refer to Annexure 1</th>
          </tr>

          <tr>
            <td>HRA</td>
            <td>{employeeDetails.hra * 1}</td>
            <td>{employeeDetails.hra * 12}</td>
          </tr>

          <tr>
            <td>Residual choice pay</td>
            <td>{employeeDetails.hra * 1}</td>
            <td>{employeeDetails.hra * 12}</td>
          </tr>

          <tr>
            <th colSpan={3}>Retirals</th>
          </tr>

          <tr>
            <td>PF- Employer Contribution</td>
            <td>{employeeDetails.basicPay * 0.12}</td>
            <td>{employeeDetails.basicPay * 0.12 * 12}</td>
          </tr>

          <tr>
            <td>Gratuity (4.81% of Basic)</td>
            <td>{employeeDetails.basicPay * 0.048}</td>
            <td>{employeeDetails.basicPay * 0.048 * 12}</td>
          </tr>

          <tr>
            <td>ESI</td>
            <td>{employeeDetails.salary * 0.0075}</td>
            <td>{employeeDetails.salary * 0.0075 * 12}</td>
          </tr>



          <tr>
            <td>NPS</td>
            <td>{employeeDetails.basicPay * 0.12}</td>
            <td>{employeeDetails.basicPay * 0.12 * 12}</td>
          </tr>

          <tr>
            <th>TOTAL FIXED PAY (A)</th>
            <td>{Number(employeeDetails.salary) + Number(employeeDetails.travelAllowance)}</td>
            <td>{(Number(employeeDetails.salary) + Number(employeeDetails.travelAllowance)) * 12}</td>
          </tr>

          <br />
          <div style={{ height: "5rem" }}></div>

        </table>

        <div style={{ fontFamily: "serif" }}>
          <div style={{ fontSize: "30px" }}>Domestic Travel Policy</div>
          <div style={{ fontSize: "bold" }}>How to raise & claim for domestic trip expenses?</div>
          <br />

          1. Login to peoplefirst web service from side menu list go to Travel & Guest House option. <br />
          2. Select ‘Create Request’, enter necessary details for journey/ stay and submit for approval to L1. <br />
          3. Once the trip is completed login to peoplefirst web, search for your relevant trip by trip number and click on the same. <br />
          4. Update details of your expenses in the respective tabs and submit for claim. <br />
          <br />
          <div style={{ fontWeight: "bold" }} >Claims cannot be done for dates exceeding 60 days from date of travel.</div>
          <br />

          Salary Revision: <br />
          Your salary will be reviewed on annual basis. Revision in salary will be affected every year as per policy of the company.
          Salary revisions are discretionary and will be subject to, and on basis of effective (Individual and company) performance and
          results. <br />
          <br />
          Statutoryand TDS Deductions: <br />
          Statutory amount will be deducted from your salary as and when applicable such as Professional Tax, Income Tax, Provident
          Fund, and national pension scheme (NPS). <br />

          <br />
          Leave: <br />
          Annual Leave (AL)
          <ul>
            - You will be eligible for 12 days Annual Leave. <br />
            - You will accrue 3 leaves per quarter. These 3 leaves will be credited to employee’s leave balance at the beginning of every
            quarter in advance. <br />
            - An employee servingnotice cannot avail anyleaves during notice period. Leaves cannot be adjusted against notice period. At
            the end of everyleave year a maximum of 10 un-utilized leaves can be carried forward. Balance ALs will get lapsed. <br />
            - Un-utilized ALs will be encased only at the time of Full and Final settlement Sick Leave
            (SL) <br />
            - You will be eligible for 3 days sick leaves every year. SL cannot be carried forward to the next year. SL cannot be encased. <br />
            - Absence without Notice: <br />
            - Absence without leave or remaining absent beyond the period of leave originally granted or subsequently extended, shall
            result in termination of your employment without any notice unless you. <br />
            - Return to work within 3 days from the commencement of such absence, and provide satisfactory explanation to management
            regarding such absence
          </ul>
          <br />
          <br />
          <div>
            <div style={{ fontSize: "20px" }}>- Posting and Transfer:</div>
            Your services are liable to be transferred, at the sole discretion of management, in such other capacity as the company may
            determine to any department, location, associate concern or subsidiary, at any place in India or abroad, whether existing today
            or which may come up in future. In such case, you will be governed by the terms and conditions of the service applicable at
            the new placement location. <br />
          </div>
          <br />
          <div style={{ paddingLeft: "5%" }}>
            <div style={{ fontSize: "20px" }}>Termination of Employment:</div>
            <div>
              - Your services maybe terminated on either side bygiving 1 months’ notice. <br />
              - In the event the termination with notice is at the instance of the employee, the company at its sole discretion reserves
              the right to relieve the employee on any date during the notice period by waving the notice period in full or part
              without paying any amount towards the balance notice period. <br />
              - At the sole discretion of the company your services are liable to be terminated without any notice or salary in lieu thereof
              in the event of breach of the terms and conditions of thisletter and the annexure thereto, including refusal of transfer
              or you being involved in violation of any of the company’s rules, policies, services regulations, code of conduct, or
              any offence which may or may not be directly connected with the business of the company and for suchact the
              company shall not be held liable under any circumstances and provisions. The company shall also be entitledto
              terminate your services with immediate effect in the event any of your actions/inactions bring bad name and/or
              disrepute to the company. <br />
              - Or Anyof the below reasons <br />
              - Your breach of any of these terms or any other agreement signed by you with the Company, or <br />
              - Your breach of the Company code of conduct, policies, rules, regulations and procedures, or <br />
              - The Company’s background check reveals discrepancies in the information or documents provided by you to the
              - Company during the recruitment process, or <br />
              - The Companyfinds your performance unsatisfactoryduring any period of training or in the discharge of duties
              assignedto you, or <br />
              - Any act or mission by you that may have the effect of injuring the reputation or business ofthe Company or causing
              - loss to the Company, or <br />
              - Your failure to complywith the instructionsspecified in Schedule 1 hereto, or <br />
              - Your Unauthorized absence from work; or <br />
              - Your insubordination; or <br />
              - Your misconduct <br />
            </div>
          </div>
          <br />

          <div>
            Full-Time Employment: <br />
            Your position from the date of joining is a full-time employment with the company and you shall devote yourself exclusively
            to the business and interest of the company
          </div>
          <br />

          <div>
            Confidentiality: <br />
            For the purpose of this clause, “Confidential Information” means all information relating to the business affairs and finances
            of the Company and its group companies and trade secrets, including without limitation technical data and know-how,
            relating to the business of the company or its group companies, whether in a tangible or intangible form.
            You shall not during the continuance of your employment with the company, or at any time thereafter, divulge or disclose to
            any third person whomsoever, or make any use of your own or for whatever purpose confidential information regarding the
            company’s affairs or administration or research carried out, whether the same is confided to you, obtained by you during
            employment with the company, or otherwise and you shall during the continuance of your employment hereunder also use
            your best endeavours to prevent any other person from doing so. In case of any breach or default by you of the obligation
            mentioned, your employment may be terminated by the company with immediate effect.
          </div>
          <br />



          <div>
            Intellectual Property: <br />
            If you conceive any new or advanced mention of improving designed/ process/ formulae/ system, etc. in relation to the
            business/operation of the company, such developments will be fully communicated to the company and will be, and remain,
            the sole right/property of the company
          </div>
          <br />

          <div>
            Non-compete requirements: <br />
            You agree to not pursue employment or business alliance with any organization that is in direct or indirect competition of the
            Company. This will include companies in the domain of transportation services and transportation technology development.
          </div>
          <div>
            You agree to not divulgeCompany’s trade secrets with such organizations during and after your employment termination
            with the company. The Company reserves the right of civil and criminal proceedings in case of violation of this clause
          </div>

          <br />
          <div>
            Non-Solicitation: <br />
            During the Employment Period and for a period of six months after any termination of employment hereunder for any reason,
            Employee will not, directly or indirectly, (i) induce or attempt to induce any employee of the Company to leave the
            employment of the Company; (ii) in any way interfere with the relationships between the Company and any such employee
            of the Company; (iii) employ or otherwise engage as an employee, independent contractor or otherwise any such employee
            of the Company; or (iv) induce or attempt to induce any customer, supplier, licensee or other person or entity that has done
            business with the Company within twenty-four (24) months of Employee’s last day of employment to cease doing business
            with the Company or in any way interfere with the relationship between anysuch customer, supplier, licensee or other business
            entity and the Company. Background verification: <br />
            <div style={{ height: "3rem" }}></div>
            Your employment will be subject to background verification of the documents, employment history and the facts you have
            shared. Anydiscrepancies arising out such verification will have to be explained. Companyreserves the right of appropriate
            action, including termination of the employment, in case of material difference between the facts you provide and the
            verified facts.
          </div>
          <br />

          <div>
            Please confirm your acceptance of the appointment on the above terms and condition by signing and returning a signed copy
            of this letter for our records.
          </div>
          <br />

          <div>
            KindlySubmit the following documents within 7 days from the date of this letter, failing which this offer letter will be treated
            as withdrawn.
          </div>
          <br />

          <div>
            Identification proof Address proof <br />
            - Photocopies of educational certificates Photocopies of work experience certificates Three passport size Photo  <br />
            - Release and appointment letter of Previous employer Salary slip of last three month <br />
            - Employee’s PF A/c Number <br />
            - Bank Account Details with cancelled check <br />
          </div>
          <br />

          <div>
            We welcome you to our organization and look forward to your contribution to the growth of the organization.
          </div>
          <br />


          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}> Documnets
            {images.map((image, index) => (
              <div key={index} style={{ position: 'relative', margin: '5px' }}>
                <img src={image.url} alt={image.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <button
                  onClick={() => removeImage(image.url)}
                  style={{
                    position: 'absolute', top: 0, right: 0, background: 'red', color: 'white',
                    border: 'none', cursor: 'pointer'
                  }}
                >

                </button>
              </div>
            ))}
          </div>

          <div>
            Thanks & Regard, <br />
            HSBE LIMITED
          </div>
          <br />

          <br />

          <div style={{ display: "flex", gap: "50%" }}>

            <div>
              <div><img src={headImg} width={150} alt="" /></div>
              (HR HEAD)
            </div>

            <div>
              Employee Signature
            </div>
          </div>




        </div>




      </>
    )


  };



  const componentRef = useRef();


  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); // A4 size PDF
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let yPosition = 0;

    while (yPosition < imgHeight) {
      pdf.addImage(imageData, "PNG", 0, -yPosition, imgWidth, imgHeight);
      yPosition += pdfHeight;
      if (yPosition < imgHeight) pdf.addPage();
    }

    pdf.save("download.pdf");
  };

  return (
    <>

      <div>

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
              CTC in Word(Annual):
              <input type="text" name="ctc_word"
                value={employeeDetails.ctc_word}
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

            <label>
              Aadhar Card :
              <input type="file"
                accept="image/*" multiple
                onChange={handleImageUpload}
              />
            </label>
          </form>
        </div>

        <div ref={componentRef} style={{ padding: "60px", background: "#f5f5f5", margin: "10px" }}>
          <div>

            <img width={200} src={myImage} alt="logo" style={{ padding: "20px" }} />
            {generateOffer()}

          </div>
        </div>

        <div className="download-button">
          <button onClick={handleDownloadPdf}>
            Download as PDF
          </button>
        </div>

      </div>
    </>
  );
};

export default PdfGenerator;
