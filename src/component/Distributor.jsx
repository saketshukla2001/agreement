import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './css/Agreement.css';
import myImage from "../assets/logo.png"
import stoImage from "../assets/stokist-Ag.jpg"
import sign from "../assets/sign.png"
import sign2 from "../assets/sign-2.png"

const Distributor = () => {


  const [images, setImages] = useState([])

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    designation: "",
    location: "",
    dateOfCommencement: "",
    address: "",
    firmName: "",
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
        Andheri-Kurla Road Level 4, A Wing,  <br />
        Dynasty Business Park, Mumbai <br />
        Maharashtra – 40005 <br />
        <p style={{ textAlign: "right" }} >EmailId: care@shpropay.com</p> <br />
        <div style={{ backgroundColor: "black", height: "3px", textAlign: "center" }}></div>
        <p style={{ textAlign: "center", fontSize: "30px" }}>AGREEMENT FOR DISTRIBUTOR</p>


        <div style={{ textAlign: "right" }}>
          Date - {employeeDetails.dateOfCommencement}
        </div>


        This Agreement (hereinafter called the “Agreement”) is made at Andheri-Kurla Road Level 4, a Wing, Dynasty
        Business Park, Mumbai Maharashtra-40005 on the date {employeeDetails.dateOfCommencement} by and amongst <br />

        <br />

        HSBE LIMITED, incorporated as a company under the companies Act, 2013, having its
        corporate office at Andheri-Kurla Road Level 4, A Wing, Dynasty Business Park, Mumbai, Maharashtra
        400059 (hereinafter referred to as “Company”, which expression shall, unless repugnant to the context or meaning
        thereof, include its successor & permitted assigns) of the First Party <br />

        <p style={{ textAlign: "center" }}>And</p>

        <br />

        <br />

        ({employeeDetails.firmName}) having its principal place of Business at
        ……{ }……
        (Herein after referred to as the “distributor {employeeDetails.location} ” which expression shall, unless repugnant to the context or meaning
        thereof its successors-in interest/title, legal representatives and permitted assigns) of the Third Party.

        <div style={{ height: "200px" }}></div>

        <div style={{ display: "flex", gap: "40rem" }}>
          <div>
            <div>HSBE LTD</div>

            <div>Authorized Signatory (Company)</div>
            <div><img src={sign2} alt="images" /></div>
          </div>

          <div>
            <div>....................</div>
            <div>Authorized Signatory (DISTRIBUTOR)</div>
          </div>
        </div>

        <p style={{ fontSize: "25px", fontFamily: "serif", textAlign: "center" }}>TERMS AND CONDITIONS ARE AS FOLLOWS:-</p>

        <br />
        1. This Agreement is effective from 09/02/2024 for a period of one year and cannot be revoked
        during the period. This agreement may be renewed after one year as per mutual agreement
        between the company and the Super stockist. This agreement will came into force from the date
        when goods are first delivered to Super Stockist.
        <br />
        <br />


        2. That Company hereby appoints ……{employeeDetails.name}…… as their Super stockist for the sale of their
        products in the assigned Districts/City of, ………………. India or areas as assigned by the
        company. <br />
        <br />

        3. That the Super stockist will arrange a warehouse space approximately of 15*20 square meters
        and should have shelves to store the goods and plastic boxes/wooden stands for flour are
        necessary due to moisture and all the relevant expenses on the safe storage of the goods will
        be taken care by the Chanel partner with Super stockist. <br />
        <br />

        4. The SUPERSTOCKIST will have to pay Rs. 0 (Zero) Amount for registration. The amount
        is non-refundable. <br />

        <br />

        5. The company will sail the product to Super stockist at the price which includes margin of
        Chanel partner with Super stockist and Distributer. is given in Annexure (given at the end of
        the agreement) after appropriate trade discount on MRP as applicable. In this case, related
        document like road permit and GST No. will be provided by the Super stockist. Company
        will pay for Warehouse rent, freight at the rate specified at the end of agreement <br />

        <br />

        6. Annexure 2. [staff for sales]. (You can provide ware-house employee with their Identity
        proof) <br />

        <br />
        7. On the other hands company will provide all the marketing related tools like Catalogue,
        leaflets, staff and proper team in Consultation with Chanel partner with Super stockist in the
        assigned territory. <br />

        <br />
        8. All sales consignments shall be sent by the company to the SUPERSTOCKIST on Advance
        and account shall be cleared bill to bill by the SUPERSTOCKIST on monthly basis by way
        of issuing A/c Statement. The payment only done in the fever of SS A/C OR HSBE LTD. <br />

        <br />

        9. That the books of accounts, records, vouchers, and other related records register shall be true
        and correctly maintained by the Distributor and the same will be available in the Distributor’s
        office for the inspection at any time by the principals or their authorized agents. <br />

        <br />

        10. After receiving purchase order along with payment confirmation, it is expected that Super
        stockist will make delivery within next two working days. Responsibility of collecting order
        is with Company. <br />
        <br />

        11. That the Super stockist will be responsible for charging the appropriate trade tax for the
        respective area. He will submit the necessary trade tax return to the concerned authorities and
        remit the tax for the sales made by him (the principal shall not be responsible for any levy of
        trade tax that is in excess of amount of tax collected by the SUPER STOCKIST. The Super
        stockist shall be responsible for the payment of tax and any default in this regard shall be the
        sole liability with Super stockist. <br />

        <br />

        12. That the Distributor shall be wholly responsible for the collection of the sale proceeds and
        remittance thereof to the company as per the terms of the trade. Any default or noncompliance
        of terms of the Agreement shall be taken as the breach of the Contract. <br />

        <br />

        <br />

        <br />

        <br />

        <br />

        <br />


        13. Responsibility to maintain stock is with company. If the company launches the scheme, then
        stock should be maintained so that supply of goods is not suffered in any circumstances. <br />

        <br />


        14. That the Distributor shall ensure safe and sound custody of goods, so that goods may not be
        damaged or stolen. In case of damage or loss in transit, the company will give the transit
        insurance to Distributor against satisfactory report. The Distributor shall ensure sale of the
        entire product as per product expiry time period. The company will not accept any goods
        after sales except in event of cancellation or termination of agreement. <br />
        <br />

        15. That the SUPERSTOCKIST will dispatch the material to the Distributor within 2 days against
        their purchase order on letter head or by mail with payment details. <br />
        <br />

        16. That company will not promote sale of goods on credit to retailers. Credit sales to retailers
        could be done by distributes at their sole discretion. <br />

        <br />
        17. The product will be priced as per the price on the day invoice is generated. <br />
        <br />

        18. If one percent our team is not sealing properly then, the company will buy back of goods only
        in the form of Combo if it is not then the company will not buy back of single goods. <br />
        <br />

        19. Any dispute arising between the parties shall be subject to Noida. <br />

        20. You have to store 50% stock mandatory. <br />
        <br />
        21. Order from E-pay Later, the company will send your goods within 3-4 working days. <br />
        <br />
        22. If you order goods and you will not receive goods then you don’t need to pay through E-pay later. <br />
        <br />
        23. You have to pay through E-pay Later after ordering Goods of 14 days. <br />
        <br />
        24. If you do not pay on 14th days of ordering goods then you have to interest. <br />
        <br />
        <div style={{ height: "10rem" }}></div>

        <div style={{ display: "flex", gap: "40rem" }}>
          <div>
            <div>HSBE LTD</div>

            <div>Authorized Signatory (Company)</div>
            <div><img src={sign} width={500} alt="image" /></div>
          </div>

          <div>
            <div>....................</div>
            <div>Authorized Signatory (DISTRIBUTOR)</div>
          </div>
        </div>



        <p style={{ fontWeight: "bold", fontFamily: "initial", textAlign: "center", fontSize: "30px" }}>Annexure 1</p>

        <br />

        <div style={{ fontWeight: "bold", fontFamily: "initial", textAlign: "center", fontSize: "20px" }} >
          Without Investment Profit Margin for Superstockist.<br />
        </div>
        <br />

        <table style={{ borderCollapse: "collapse", margin: "20px", width: "80%", fontFamily: "serif" }}>


          <tr>
            <th>CATEGORIES</th>
            <th>SUPERSTOCKIST INVESTMENT</th>
            <th>MARGIN</th>
          </tr>

          <tr>
            <td>AATA</td>
            <td style={{ fontSize: "15px" }} >4 Lakh - 6 Lakh</td>
            <td>4%</td>
          </tr>

          <tr>
            <td>OIL</td>
            <td style={{ fontSize: "15px" }} >4 Lakh - 6 Lakh</td>
            <td>4%</td>
          </tr>

          <tr>
            <td>BISCUIT & NAMKEEN</td>
            <td style={{ fontSize: "15px" }} >4 Lakh - 6 Lakh</td>
            <td>3%</td>
          </tr>

          <tr>
            <td>DRINK</td>
            <td style={{ fontSize: "15px" }} >4 Lakh - 6 Lakh</td>
            <td>3%</td>
          </tr>

          <tr>
            <td>SUGAR</td>
            <td style={{ fontSize: "15px" }} >4 Lakh - 6 Lakh</td>
            <td>1.5%</td>
          </tr>

        </table>

        <div style={{ fontWeight: "bold", fontFamily: "initial", fontSize: "20px" }} >
          Loading & Unloading charges are Rs. 35 per Quintel, Only for Sugar
          Combo.<br />

          <br />

        </div>



        <div style={{ fontWeight: "bold", fontFamily: "initial", fontSize: "20px" }} >
          Without Investment Profit Margin for Superstockist<br />
        </div>


        <br />

        <div style={{ height: "7rem" }}></div>


        <div style={{ display: "flex", gap: "40rem" }}>
          <div>
            <div>HSBE LTD</div>

            <div>Authorized Signatory (Company)</div>
            <div><img src={sign} width={500} alt="image" /></div>
          </div>

          <div>
            <div>....................</div>
            <div>Authorized Signatory (DISTRIBUTOR)</div>
          </div>
        </div>


        <br />

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

        <div style={{ height: "25rem" }}></div>


        <div>
          <img src={stoImage} alt="images" />
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
          AGREEMENT FOR DISTRIBUTOR
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

            <div className="offer-letter-div">

              <div>

                <label>
                  Firm Name :
                  <input type="text"
                    name="firmName"
                    value={employeeDetails.firmName}
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

              </div>

              <div>

                <label>
                  Address :
                  <input type="text"
                    name="address"
                    value={employeeDetails.address}
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

export default Distributor