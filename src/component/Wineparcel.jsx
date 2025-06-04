import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import myLogo from "../assets/nukkad.png"

const Wineparcel = () => {

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
                <p style={{ textAlign: "center", fontSize: "30px" }}>WINE PARCEL AGREEMENT</p>




                <div style={{ textAlign: "right" }}>
                    Date - {employeeDetails.dateOfCommencement}
                </div>


                This Parcel Agreement ("Agreement") is entered into by and between:
                [{employeeDetails.location}], hereinafter referred to as “the Supplier” or “the Company”,


                <p style={{ textAlign: "center" }}>And</p>

                <br />

                <br />

                The Customer, any individual placing an order through the Company’s mobile application, hereinafter referred to as “the Customer”. <br />
                <strong>WHEREAS</strong>, the Supplier is engaged in the production and marketing of quality wines and wishes to appoint a trusted Parcel partner to offer its products directly to customers through a parcel model within a defined area; <br />
                <strong>WHEREAS</strong>, the Customer desires to receive and purchase the Supplier’s wines via home Parcel and agrees to comply with the terms and conditions related to responsible alcohol distribution and receipt; <br />
                <strong>NOW, THEREFORE</strong>, in light of the mutual understanding and intentions stated above, and in consideration of the promises and conditions set forth herein, both parties agree to the following terms: <br />

                <div style={{ height: "5rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        1. PURPOSE
                    </div>

                    <div>
                        The Company operates a Parcel service whereby Customers may place orders for wine through its official mobile application.
                        The Parcel of the ordered parcel shall be undertaken by an authorized third-party Parcel partner. The purpose of this Agreement is to set out the terms and conditions under which such parcels shall be conducted.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        2. ORDER AND PARCEL TERMS
                    </div>

                    <div>
                        - The Customer may place an order for wine using the official mobile application provided by the Company. <br />
                        - Upon confirmation, the parcel will be packed and handed over to a licensed Parcel partner, who shall be responsible for last-mile parcel to the address specified by the Customer. <br />
                        - Deliveries will be made between [Operating Hours], and Customers are advised to ensure their availability during this period. <br />
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        3. PAYMENT METHODS
                    </div>

                    <div>
                        The Customer may choose from the following payment options:
                        <div style={{ marginLeft: "1rem" }}>
                            - Cash on Parcel (COD): Full payment must be made in cash at the time of parcel. <br />
                            - Net Banking: Customers may opt to prepay via secure net banking platforms integrated within the app. <br />
                        </div>
                        Failure to provide full payment will result in non-Parcel of the parcel.
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        4. AGE RESTRICTION
                    </div>

                    <div>
                        Strictly 18+ Only <br />
                        In accordance with applicable legal and regulatory guidelines, the Customer must be at least 18 years of age to place an order.
                        A valid government photo ID (Aadhar Card) must be presented at the time of parcel. <br />
                        Parcel executives are instructed to deny parcel if the Customer appears to be underage or fails to produce acceptable identification. <br />
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        5. RESTRICTED PARCEL LOCATIONS
                    </div>

                    <div>
                        No Parcel Zones <br />
                        For legal and ethical reasons, the Company will not parcels to the following locations: <br />
                        <div style={{ marginLeft: "2rem" }}>
                            - Within the premises or near the vicinity of Temples, Mosques, Churches, or other religious establishments. <br />
                            - Schools, Colleges, Universities, or any recognized academic institutions. <br />
                            - Government-declared dry zones or areas where alcohol is restricted by law. <br />
                        </div>
                        Customers are responsible for ensuring that the parcel address complies with these guidelines.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div style={{ fontSize: "2rem" }}>
                        6. IDENTIFICATION REQUIREMENT
                    </div>

                    <div>
                        One ID – One Bottle Policy <br />
                        To comply with responsible Parcel practices:
                        <div style={{ marginLeft: "2rem" }}>
                            - Each bottle ordered must correspond to one valid ID presented at Parcel. <br />
                            - This policy is in place to prevent bulk purchases by a single individual and to discourage reselling or underage distribution. <br />
                        </div>
                        Failure to comply with this requirement will result in partial or full cancellation of the order.
                    </div>

                </div>

                <div style={{ height: "10rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        7. PARCEL FAILURE CONDITIONS
                    </div>

                    <div>
                        Parcel may be refused under the following circumstances:
                        <div style={{ marginLeft: "2rem" }}>
                            - Customer is underage or fails to produce valid ID. <br />
                            - Payment is not completed or refused at the time of Parcel. <br />
                            - The Parcel address is within a restricted zone. <br />
                            - There is suspicion of misuse or policy violation.
                        </div>
                    </div>

                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        8. LIMITATION OF LIABILITY
                    </div>

                    <div>
                        The Company shall not be held liable for:
                        <div style={{ marginLeft: "2rem" }}>
                            - Any delay caused by traffic, weather, or unforeseen logistical issues.
                            - Any consumption-related health issues post-Parcel.
                            - Refused Parcel due to Customer non-compliance with terms outlined herein.
                        </div>
                    </div>

                </div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        9. GOVERNING LAW
                    </div>

                    <div>
                        This Agreement shall be governed by and construed in accordance with the laws of [{employeeDetails.address}]. Disputes arising hereunder
                        shall be subject to the exclusive jurisdiction of the courts of [{employeeDetails.address}].
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div>
                    <div style={{ fontSize: "2rem" }}>
                        10.  ACCEPTANCE OF TERMS
                    </div>

                    <div>
                        By placing an order through the Company’s mobile application, the Customer acknowledges and agrees to the terms outlined in this Agreement. <br />
                        <strong>IN WITNESS WHEREOF</strong>, the undersigned have read, understood, and agreed to the terms and conditions outlined in this  Wine Parcel Agreement. By signing below,
                        both parties acknowledge their responsibilities and affirm their commitment to abide by all applicable legal, regulatory, and operational standards regarding the sale and Parcel of alcoholic beverages.
                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

                <div style={{ height: "2rem" }}></div>

                <div>

                    <div>
                        <strong>SUPPLIER</strong>
                    </div>

                    <div>
                        By: ___________________________ <br />
                        Name:  <br />
                        Title: <br />
                        Date: _______________________

                    </div>
                </div>

                <div style={{ height: "2rem" }}></div>

                <div style={{ backgroundColor: "black", height: "0.1rem" }}></div>

                <div>
                    <div>
                        <strong>By</strong> <br />
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
                    WINE PARCEL AGREEMENT
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

export default Wineparcel