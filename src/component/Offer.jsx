import React from 'react'
import { useNavigate } from 'react-router-dom'


const Offer = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">

        <header className="w-full bg-opacity-80 backdrop-blur-md text-white py-6 text-center text-3xl font-extrabold shadow-lg" >
          Wellcome to Hsbe Offer Letter
        </header>

        <main className="flex flex-col items-center justify-center flex-1 text-center" >

          <h1 className="text-4xl font-bold mb-6 drop-shadow-lg" >Here Your All Offer Letter</h1>
          <p className="text-lg mb-6 max-w-lg" >Exploring here our all company offer letters</p>

          <div className="flex space-x-6 mb-9" >
            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/graphic-design")}
            >
              Graphic designer
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/telecaller")}
            >
              Telecaller
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/hr")}
            >
              HR
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/admin")}
            >
              Admin
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/area-sales-manager")}
            >
              Area Sales manager
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/sales-officer")}
            >
              Sales officer
            </button>

          </div>

          <div className="flex space-x-6" >
            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/mis")}
            >
              MIS
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/accountant")}
            >
              Accountant
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/godown-incharge")}
            >
              Godown incharge
            </button>

            <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={()=> navigate("/offer-letter/suppier")}
            >
              Supplier
            </button>

          </div>

          <div>

          </div>

        </main>

        <footer className="w-full bg-opacity-80 backdrop-blur-md text-white py-4 text-center text-sm shadow-lg" >
          &copy; 2025 Your Company. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default Offer