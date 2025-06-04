import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import myLogo from "../assets/nukkad.png"

const Superstockwine = () => {

  const [images, setImages] = useState([])

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    location: "",
    dateOfCommencement: "",
    address: "",
    firmName: "",
    paymentTerms: "",
    agreementPeriod: "",
    mobile: "",
    email: "",
    laws: "",
    courtJudiciary: "",
    imageUpload: ""
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function Example({ firmName }) {
    if (firmName) {
      return `${employeeDetails.firmName}`
    } else {
      return `${employeeDetails.name}`
    }
  }


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
        <div style={{ display: "flex", gap: "10rem" }}>


          <div>
            HSBE LIMITED <br />
            Andheri-Kurla Road Level 4, A Wing,  <br />
            Dynasty Business Park, Mumbai <br />
            Maharashtra – 40005 <br />
          </div>

          <div>
            C.I. Number: - U51909UP2020PLC131384 <br />
            GST Number: - 09AAFCH3430B1Z2 <br />
            Import/Export Number: - AAFCH3430B <br />
            PAN Number: - AAFCH3430B <br />
            FSSAI Number: - 12724054000221
          </div>

          <div>
            <img src={myLogo} width={300} alt="images" />
            <p style={{ textAlign: "right" }} >EmailId: care@nukkad.shop</p> <br />
          </div>

        </div>
        <div style={{ backgroundColor: "black", height: "3px", textAlign: "center" }}></div>
        <p style={{ textAlign: "center", fontSize: "30px" }}>SUPER STOCKIST AGREEMENT <br /> FOR WINE TAKEAWAY/PARCEL</p>




        <div style={{ textAlign: "right" }}>
          Date - {employeeDetails.dateOfCommencement}
        </div>


        This Super Stockist Agreement (“Agreement”) is made and entered into on this ___ day of [{employeeDetails.dateOfCommencementß}], by and between:
        [{employeeDetails.firmName}], a company having its principal place of business at [{employeeDetails.location}] (hereinafter referred to as the “Company”)


        <p style={{ textAlign: "center" }}>And</p>

        <br />

        <br />

        [{employeeDetails.name}], residing at [{employeeDetails.address}], (hereinafter referred to as the “Super Stockist”).
        WHEREAS, the Company is engaged in the business of manufacturing, marketing, and distributing [Product Name/s or Category], and is desirous of expanding its distribution network;
        AND WHEREAS, the Super Stockist has shown interest and capability to represent the Company in a broader distribution role;
        NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, the parties hereby agree as follows:

        <div style={{ height: "5rem" }}></div>

        <div>
          <div style={{ fontSize: "2rem" }}>
            1. DESIGNATION
          </div>

          <div>
            The Company hereby designates the Super Stockist as its exclusive Super Stockist for the territory covering the following five districts: <br />
            [District 1], [District 2], [District 3], [District 4], and [District 5]. <br />
            The Super Stockist agrees to represent, promote, and distribute the Company’s products throughout the designated region as per the terms outlined in this Agreement.
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div>

          <div style={{ fontSize: "2rem" }}>
            2. DISTRIBUTION STRUCTURE
          </div>

          <div>
            The Super Stockist will appoint one District Distributor in each of the five districts under their jurisdiction. <br />
            Each District Distributor will be responsible for appointing a minimum of 15 and a maximum of 30 Sub Distributors within their respective districts, depending on area size, population, and market potential.
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div>

          <div style={{ fontSize: "2rem" }}>
            3. COMMERCIAL TERMS
          </div>
          <h3>Margin:</h3>

          <div>
            Each Super Stockist shall be entitled to a margin of 1% on their total sales volume. This amount shall be calculated monthly and settled within 15 days of the following month.
          </div>

        </div>

        <div style={{ height: "2rem" }}></div>

        <div>
          <div style={{ fontSize: "2rem" }}>
            4. ROLES AND RESPONSIBILITIES
          </div>

          <div>
            The Super Stockist shall be responsible for maintaining adequate stock levels, ensuring timely supply to the District Distributors,
            and supporting the entire distribution chain to meet their targets effectively. This includes overseeing logistics, assisting in marketing
            efforts, and ensuring adherence to the Company's pricing and branding guidelines. The Super Stockist is also expected to facilitate prompt
            payment collections from the network, provide regular updates on market conditions, and act as the key communication link between the
            Company and the distributors in their region. Ensuring a professional, transparent, and proactive approach in managing the distribution network is critical to the success of this engagement.
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div>
          <div style={{ fontSize: "2rem" }}>
            5. TERMS OF PAYMENT
          </div>

          <div>
            All sales and transactions will be executed on a [{employeeDetails.paymentTerms}] basis as per mutual understanding. Payment defaults beyond 15 days shall attract interest and possible suspension of supplies.
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div>

          <div style={{ fontSize: "2rem" }}>
            6. DURATION & TERMINATION
          </div>

          <div>
            This Agreement shall remain valid for a period of [{employeeDetails.agreementPeriod}] year from the date hereof and shall be renewable on mutual consent. <br />
            Either party may terminate this agreement with 30 days’ written notice. Grounds for termination include but are not limited to:
            failure to meet sales targets, breach of terms, or damage to brand reputation.
          </div>

        </div>

        <div style={{ height: "2rem" }}></div>

        <div>
          <div style={{ fontSize: "2rem" }}>
            7. CONFIDENTIALITY
          </div>

          <div>
            Both parties agree to maintain strict confidentiality regarding pricing, customer information, and any other proprietary business information.
          </div>

        </div>

        <div style={{ height: "2rem" }}></div>

        <div>
          <div style={{ fontSize: "2rem" }}>
            8.8. DISPUTE RESOLUTION
          </div>

          <div>
            Any disputes arising from this Agreement shall be resolved amicably. Failing that, disputes shall be subject to the jurisdiction of the courts at [{employeeDetails.courtJudiciary}]
          </div>
        </div>

        <div style={{ height: "10rem" }}></div>

        <div>
          <div>
            <strong>IN WITNESS WHEREOF,</strong> the parties hereto have executed this Agreement as of the Effective Date. <br />

            <div style={{ height: "2rem" }}></div>
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

        <div style={{ height: "2rem" }}></div>

        <div>

          <div>
            For the Company
          </div>

          <div>
            Signature: ___________________ <br />
            
          </div>
        </div>

        <div style={{ height: "2rem" }}></div>

        <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

        <div>
          <div>
            <strong>Super Stockist</strong> <br />
            Signatory: [{employeeDetails.name}]
          </div>

          <div>
            Email of signatory: [{employeeDetails.email}]
          </div>

          <div>
            Mobile Number of Signatory: [{employeeDetails.mobile}]
          </div>

          <div>
            Timestamp:
          </div>
        </div>


        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
          {images.map((image, index) => (
            <div key={index} style={{ position: 'relative', margin: '5px' }}> <p>Documents</p>
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

        <div style={{ fontSize: "30px", fontFamily: "serif", textAlign: "center" }}>
          FOR WINE TAKEAWAY/PARCEL
        </div>



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
              Location (HQ):
              <input
                type="text"
                name="location"
                value={employeeDetails.location}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Address :
              <input type="text"
                name="address"
                value={employeeDetails.address}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Firm Name :
              <input type="text"
                name="firmName"
                value={employeeDetails.firmName}
                onChange={handleInputChange}
              />
            </label>

            <div className="offer-letter-div">

              <div>

                <label>
                  Payment Terms :
                  <input type="text"
                    name="paymentTerms"
                    value={employeeDetails.paymentTerms}
                    onChange={handleInputChange}
                  />
                </label>

                <label>
                  Agreement Period :
                  <input type="text"
                    name="agreementPeriod"
                    value={employeeDetails.agreementPeriod}
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
                  Mobile Number :
                  <input type="Number"
                    name="mobile"
                    value={employeeDetails.mobile}
                    onChange={handleInputChange}
                  />
                </label>

              </div>

              <div>


                <label>
                  Email Id :
                  <input
                    type="email"
                    name="email"
                    value={employeeDetails.email}
                    onChange={handleInputChange}
                  />
                </label>

                <label>
                  Laws :
                  <input
                    type="text"
                    name="laws"
                    value={employeeDetails.laws}
                    onChange={handleInputChange}
                  />
                </label>

                <label>
                  Court Judiciary :
                  <input
                    type="text"
                    name="courtJudiciary"
                    value={employeeDetails.courtJudiciary}
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
              </div>
            </div>
          </form>
        </div>

        <div ref={componentRef} style={{ padding: "100px", background: "#f5f5f5", margin: "20px" }}>
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
  )
}

export default Superstockwine