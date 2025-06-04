import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Sub = () => {

  const navigate = useNavigate();



  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r bg-blue-600 to-purple-700 p-6 text-white">

        <header className="w-full bg-opacity-80 backdrop-blur-md text-white py-6 text-center text-3xl font-extrabold shadow-lg" >
          Wellcome to Hsbe Agreement
        </header>

        <main className="flex flex-col items-center justify-center flex-1 text-center" >

          <h1 className="text-4xl font-bold mb-6 drop-shadow-lg" >Here Your All Agreement</h1>
          <p className="text-lg mb-6 max-w-lg" >Exploring here our all company Agreement</p>

          <div>

            <div className="flex space-x-6 mb-9" >
              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
                onClick={() => navigate("/super-stockist")}
              >
                SUPERSTOCKIST
              </button>

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
                onClick={() => navigate("/distribution")}
              >
                DISTRIBUTOR
              </button>

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
                onClick={() => navigate("/agreement/vendor")}
              >
                VENDOR
              </button>

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
                onClick={() => navigate("/district-distributor")}
              >
                DISTRICT DISTRIBUTOR AGREEMENT
              </button>

            </div>

            <div>

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
                onClick={() => navigate("/agreement/delivery")}
              >
                DELIVERY
              </button>
              

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 mx-6"
                onClick={() => navigate("/wine-superstokist")}
              >
                SUPER STOCKIST AGREEMENT
              </button>

              <button className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 mx-6"
                onClick={() => navigate("/wine-parcle")}
              >
                WINE PARCEL AGREEMENT
              </button>

              

            </div>

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
