import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import myLogo from "../assets/nukkad.png"

const Vendorss = () => {

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
                <p style={{ textAlign: "center", fontSize: "30px" }}>AGREEMENT FOR VENDOR</p>




                <div style={{ textAlign: "right" }}>
                    Date - {employeeDetails.dateOfCommencement}
                </div>


                This Agreement (hereinafter called the “Agreement”) is made at Andheri-Kurla Road Level 4, a Wing, Dynasty Business Park,
                Mumbai Maharashtra-400059 on the date ({employeeDetails.dateOfCommencement}) by and amongst

                <br />

                HSBE LIMITED, incorporated as a company under the companies Act, 2013, having its
                corporate office at Andheri-Kurla Road Level 4, A Wing, Dynasty Business Park, Mumbai, Maharashtra
                400059 (hereinafter referred to as “Company”, which expression shall, unless repugnant to the context or meaning
                thereof, include its successor & permitted assigns) of the First Party <br />

                <p style={{ textAlign: "center" }}>And</p>

                <br />

                <br />

                ({employeeDetails.firmName ? employeeDetails.firmName : employeeDetails.name}) having its principal of at
                ({employeeDetails.address})
                (Herein after referred to as the " Supply Vendor {employeeDetails.location} ” which expression shall, unless repugnant to the context or meaning
                thereof its successors-in interest/title, legal representatives and permitted assigns) of the Second Party.

                <div style={{ height: "5rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        1.1. SCOPE OF SERVICES
                    </div>

                    <div>
                        1.1 Vendor will provide the Services detailed as follows: <br />
                        [Detailed description of goods/services to be provided] <br />
                        1.2 Vendor will carry out the Services with reasonable skill and care, and in compliance with generally recognized commercial practices and standards in the industry.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        2.2. PAYMENT AND INVOICING
                    </div>

                    <div>
                        2.1 In consideration of the provision of the Services, the Customer will pay the Vendor as follows: <br />
                        [Detailed description of payment terms, e.g., “ ({employeeDetails.paymentTerms}) days of receipt of invoice"] <br />
                        2.2 Vendor will invoice Customer on time of delivery basis unless otherwise agreed in writing.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        3.3. TERM AND TERMINATION
                    </div>

                    <div>
                        3.1 The term of this Agreement will commence on the Effective Date {employeeDetails.dateOfCommencement} and will continue for a period of __ years/months, unless earlier terminated as provided below. <br />
                        3.2 Either party may terminate this Agreement by providing ({employeeDetails.agreementPeriod}) days/months/years written notice to the other party.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        4.4. REPRESENTATIONS AND WARRANTIES
                    </div>

                    <div>
                        4.1 Each party represents and warrants to the other that it has the full power and authority to enter into and perform this Agreement.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        5.5. LIABILITY
                    </div>

                    <div>
                        5.1 Except for damages resulting from willful &expiry or damage goods misconduct or gross negligence, neither party will be liable to the other for any
                        incidental, indirect, special, consequential damages, or lost <br />
                        profits arising out of, or in connection with, this Agreement, whether an action is in contract or tort and regardless of the theory of liability. <br />
                        5.2 Vendor's total liability under this Agreement shall not exceed the total amount paid by the Customer to the Vendor under this Agreement. <br />
                        5.3 Any damages incurred during the unloading of goods from the vehicle, and the cost of such damages shall be refundable to the consignor. <br />
                        5.4 In the event of bottle leakages or any damage to liquid products, cold drinks or similar items, the damaged goods shall be returned to the supplier,
                        and such products shall not be deemed accepted by the buyer.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        6.6. CONFIDENTIALITY
                    </div>

                    <div>
                        6.1 Each party agrees to keep confidential all Confidential Information received from the other party and to use it strictly for the purposes of this Agreement.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        7.7. DATA PROTECTION
                    </div>

                    <div>
                        7.1 Both parties will comply with all applicable requirements of the data protection legislation. <br />
                        7.2 Vendor shall not process any personal data obtained from the Customer except as necessary to perform its obligations under this Agreement and in compliance with the Customer's written instructions.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        8.8. INDEMNIFICATION
                    </div>

                    <div>
                        8.1 Each party agrees to indemnify and hold harmless the other party from any damages, liabilities, costs, and expenses incurred as a result of the breaching party's negligence or willful misconduct.
                    </div>
                </div>

                <div style={{ height: "10rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        9.9. GOVERNING LAW AND JURISDICTION
                    </div>

                    <div>
                        9.1 This Agreement and any dispute or claim arising out of, or in connection with, it, its subject matter or formation shall be governed by, and construed
                        in accordance with, the laws of. ({employeeDetails.laws}). <br />
                        9.2 The parties irrevocably agree that the courts of. ({employeeDetails.courtJudiciary}). shall have exclusive jurisdiction Court
                        to settle any dispute or claim that arises out of, or in connection with, this Agreement or its subject matter or formation. <br />
                        <div style={{ height: "2rem" }}></div>

                        <strong>IN WITNESS WHEREOF,</strong> the parties hereto have executed this Agreement as of the Effective Date. <br />

                        <div style={{ height: "2rem" }}></div>

                        <strong> HSBE Limited (Nukkad)</strong>
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
                        Second   party
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
                    AGREEMENT FOR VENDOR
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

export default Vendorss