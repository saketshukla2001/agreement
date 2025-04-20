import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import myLogo from "../assets/nukkad.png"

const Delivery = () => {


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
        startDate: "",
        endDate: "",
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
                <div style={{ display: "flex", gap: "35rem" }}>


                    <div>
                        HSBE LIMITED <br />
                        Andheri-Kurla Road Level 4, A Wing,  <br />
                        Dynasty Business Park, Mumbai <br />
                        Maharashtra – 40005 <br />
                    </div>

                    <div>
                        <img src={myLogo} width={300} alt="images" />
                        <p style={{ textAlign: "right" }} >EmailId: care@nukkad.shop</p> <br />
                    </div>

                </div>
                <div style={{ backgroundColor: "black", height: "3px", textAlign: "center" }}></div>
                <p style={{ textAlign: "center", fontSize: "30px" }}>DELIVERY PARTNER AGREEMENT </p>




                <div style={{ textAlign: "right" }}>
                    Date - {employeeDetails.dateOfCommencement}
                </div>

                This Delivery Partner Agreement ("Agreement") is made and entered into on [{employeeDetails.dateOfCommencement}], by and between: HSBE LIMITED, a company registered
                under the laws of [{employeeDetails.courtJudiciary}], with its principal place of business at [{employeeDetails.address}] (hereinafter referred to as "{employeeDetails.firmName}"), AND [Delivery Partner {employeeDetails.name}],
                an individual/business registered under the laws of [Jurisdiction], with an address at [{employeeDetails.address}] (hereinafter referred to as "Delivery Partner").
                <br />

                <div style={{ height: "5rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        1. TERM OF AGREEMENT
                    </div>

                    <div>
                        This Agreement shall commence on [{employeeDetails.startDate}] and shall continue until [{employeeDetails.endDate}] unless
                        terminated earlier in accordance with this Agreement.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        2. SCOPE OF SERVICES
                    </div>

                    <div>
                        The Delivery Partner agrees to provide delivery services for the Company as per the terms
                        and conditions set forth in this Agreement.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        3. COMPENSATION & PAYMENT TERMS
                    </div>

                    <div>
                        - The Company agrees to compensate the Delivery Partner [{employeeDetails.paymentTerms}] for completed deliveries. <br />
                        - Payments shall be made on [Payment Schedule] to the Delivery Partner’s designated account.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        4. INDEPENDENT CONTRACTOR RELATIONSHIP
                    </div>

                    <div>
                        - The Delivery Partner is an independent contractor and shall not be considered an employee of the Company. <br />
                        - The Delivery Partner is responsible for any taxes, licenses, and permits required for their operations.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        5. OBLIGATIONS OF THE DELIVERY PARTNER
                    </div>

                    <div>
                        - To adhere to delivery timelines and quality standards set by the Company.
                        - To maintain all necessary licenses and insurance related to delivery operations.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        6. TERMINATION
                    </div>

                    <div>
                        Either party may terminate this Agreement with [{employeeDetails.agreementPeriod}] days’ written notice. Immediate termination may occur in
                        cases of breach of contract, misconduct, or failure to meet performance standards.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        7. CONFIDENTIALITY
                    </div>

                    <div>
                        The Delivery Partner agrees not to disclose any confidential information of the
                        Company during or after the term of this Agreement.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        8. GOVERNING LAW
                    </div>

                    <div>
                        This Agreement shall be governed and interpreted in accordance with the laws of [{employeeDetails.laws}].
                        IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first written above.
                    </div>
                </div>

                <div style={{ height: "3rem" }}></div>

                <div style={{ display: "flex", gap: "40rem" }}>
                    <div>
                        COMPANY
                        <div>Authorized Signatory: </div>
                        <div>Name: </div>
                        <div>Title : </div>
                        <div>Date : </div>
                    </div>

                    <div>
                        DELIVERY PARTNER
                        <div>Authorized Signatory :</div>
                        <div>Name : {employeeDetails.name}</div>
                        <div>Title : </div>
                        <div>Date : </div>
                        <div>Mobile Number : {employeeDetails.mobile}</div>
                    </div>
                
                </div>


                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {images.map((image, index) => (
                        <div key={index} style={{ position: 'relative', margin: '5px' }}> <p style={{margin:"2rem"}}>Documents</p>
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
                            Company Name :
                            <input type="text"
                                name="firmName"
                                value={employeeDetails.firmName}
                                onChange={handleInputChange}
                            />
                        </label>

                        <div className="offer-letter-div">

                            <div>

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
                                    Start Date:
                                    <input type="date" name="startDate" id="startDate"
                                    value={employeeDetails.startDate}
                                    onChange={handleInputChange} 
                                    /> 
                                </label>

                                <label>
                                    End Date: 
                                    <input type="date" name="endDate" id="endDate" 
                                    value={employeeDetails.endDate}
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
                                {/* <label>
                                    Email Id :
                                    <input
                                        type="email"
                                        name="email"
                                        value={employeeDetails.email}
                                        onChange={handleInputChange}
                                    />
                                </label> */}

                                {/* <label>
                                    Laws :
                                    <input
                                        type="text"
                                        name="laws"
                                        value={employeeDetails.laws}
                                        onChange={handleInputChange}
                                    />
                                </label> */}

                                <label>
                                    Payment Terms: 
                                    <input type="text" name="paymentTerms" id="paymentTerms"
                                    value={employeeDetails.paymentTerms}
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

export default Delivery