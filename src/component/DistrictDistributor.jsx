import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import myLogo from "../assets/nukkad.png"

const DistrictDistributor = () => {

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
                <p style={{ textAlign: "center", fontSize: "30px" }}>DISTRICT DISTRIBUTOR AGREEMENT <br /> FOR WINE TAKEAWAY/PARCEL</p>




                <div style={{ textAlign: "right" }}>
                    Date - {employeeDetails.dateOfCommencement}
                </div>


                This District Distributor Agreement (“Agreement”) is made and entered into on this ___ day of [{employeeDetails.dateOfCommencement}], by and between:
                [{employeeDetails.firmName}], having its principal place of business at [Company Address] (hereinafter referred to as the “Company”),

                <p style={{ textAlign: "center" }}>And</p>

                <br />

                <br />

                [{employeeDetails.name}], residing at [{employeeDetails.location}], (hereinafter referred to as the “District Distributor”). <br />
                <strong>WHEREAS</strong>, the Company is engaged in the business of supplying and promoting various categories of products and services through a multi-tiered distribution network; <br />
                <strong>AND WHEREAS</strong>, the Company desires to appoint a District Distributor to oversee operations within a specific geographic district, including the management of Sub Distributors; <br />
                <strong>AND WHEREAS</strong>, the District Distributor has expressed the capability and willingness to develop and manage a local network of Sub Distributors for the promotion and distribution of the Company’s products; <br />
                <strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and promises contained herein, the parties agree as follows:

                <div style={{ height: "5rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        1. DESIGNATION
                    </div>

                    <div>
                        The Company hereby designates the District Distributor as its official partner for the assigned district of [{employeeDetails.laws}],
                        with responsibilities related to sales, distribution, and market expansion through appointed Sub Distributors.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        2. DISTRIBUTION  STRUCTURE
                    </div>

                    <div>
                        The District Distributor shall be responsible for appointing and managing a network of 15 to 30 Sub Distributors within the assigned district. <br />
                        These Sub Distributors will operate under the supervision and support of the District Distributor and will be responsible for
                        promoting and distributing the Company’s products and services across retail outlets and channels.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        3. RESPONSIBILITIES &nbsp; &nbsp; OF &nbsp; THE &nbsp; DISTRICT  &nbsp; DISTRIBUTOR
                    </div>

                    <div>
                        The District Distributor shall actively manage the Sub Distributors network, ensure adequate product availability, monitor local market performance,
                        and ensure compliance with the Company’s sales processes, branding, and pricing policies. The District Distributor will also coordinate logistics, field operations,
                        training of Sub Distributors, and reporting of sales data to the Company. It is expected that the District Distributor will serve as a key communication bridge between the Company and the ground-level distribution team.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        4. COMMERCIAL  TERMS
                    </div>
                    <h3>Margin:</h3>

                    <div>
                        The District Distributor shall be entitled to a 1.5% margin on the total sales volume generated through their Sub Distributor network.
                        This margin will be calculated monthly and disbursed by the Company within 15 days of the following month, subject to verification and reconciliation
                        of sales records.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        5. DURATION & TERMINATION
                    </div>

                    <div>
                        This Agreement shall remain in effect for a period of one year from the date of signing and may be renewed based on mutual agreement and satisfactory performance. <br />
                        Either party may terminate this Agreement with 30 days’ written notice. The Company reserves the right to terminate immediately in case of fraud, gross negligence,
                        breach of terms, or damage to the Company’s brand or operations.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        6. CONFIDENTIALITY
                    </div>

                    <div>
                        The District Distributor agrees to maintain strict confidentiality regarding pricing, product strategy, operational data, and all other proprietary information received from the Company.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        7. DISPUTE  RESOLUTION
                    </div>

                    <div>
                        Any disputes arising under this Agreement shall first be attempted to be resolved amicably. If unresolved,
                        such disputes shall be subject to the jurisdiction of the courts at [City/State].
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div style={{ height: "10rem" }}></div>

                <div>


                    <div>
                        <strong>IN WITNESS WHEREOF,</strong> the parties hereto have executed this Agreement on the day and year first above written. <br />

                        <div style={{ height: "2rem" }}></div>
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div>
                        Authorized signatory
                    </div>

                    <div>
                        Signature: ___________________ <br />
                        Name: <br />
                        Designation: <br />
                        Date: <br />
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

                <div>
                    <div>
                        Signatory: [{employeeDetails.name}]
                    </div>

                    <div>
                        Email of signatory: [{employeeDetails.email}]
                    </div>

                    <div>
                        Mobile Number of Signatory: [{employeeDetails.mobile}]
                    </div>

                    <div>
                        Date:
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
                    DISTRICT DISTRIBUTOR AGREEMENT
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
                                    District Name :
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

export default DistrictDistributor