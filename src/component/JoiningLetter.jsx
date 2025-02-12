import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const JoiningLetter = () => {
  const letterRef = useRef();

  // Function to handle PDF generation
  const handlePrint = useReactToPrint({
    content: () => letterRef.current,
    documentTitle: "Joining_Letter",
    onAfterPrint: () => alert("PDF successfully downloaded!"),
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Joining Letter</h1>
        {/* The content to be printed */}
        <div ref={letterRef} className="p-4 border rounded">
          <p className="mb-4">
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
          <p>To,</p>
          <p className="mb-4">
            <strong>[Candidate Name]</strong> <br />
            [Candidate Address]
          </p>
          <p>Subject: Offer of Employment</p>
          <p className="mb-4">
            Dear <strong>[Candidate Name]</strong>,
          </p>
          <p>
            We are pleased to inform you that you have been selected for the
            position of <strong>[Position Name]</strong> at <strong>[Company
            Name]</strong>. Your joining date will be <strong>[Joining
            Date]</strong>. Please report to our office at <strong>[Office
            Location]</strong> at <strong>[Time]</strong>.
          </p>
          <p className="mt-4">
            We look forward to working with you and are confident that your
            skills and experience will contribute greatly to our team.
          </p>
          <p className="mt-4">Best regards,</p>
          <p>
            <strong>[Authorized Person’s Name]</strong> <br />
            [Designation] <br />
            [Company Name]
          </p>
        </div>

        {/* Button to trigger the PDF download */}
        <button
          onClick={handlePrint}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default JoiningLetter;
