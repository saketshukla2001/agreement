import React from 'react'
import { useNavigate } from 'react-router-dom'



const Main = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
      {/* Header */}
      <header className="w-full bg-opacity-90 backdrop-blur-md text-white py-6 text-center text-4xl font-extrabold shadow-2xl tracking-wide mb-8">
        Welcome to Our HSBE LTD 
      </header>
      
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-2xl">Offet Letter and Aggreement</h1>
        <p className="text-xl mb-8 max-w-xl font-light leading-relaxed">
          Here our company creating a Aggreement and offer letter.
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button> */}
      </main>
      
      {/* Features Section */}
      <section className="w-full py-10 bg-white flex flex-col items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

          <button onClick={()=> navigate("/offer-letter")} className='px-8 py-4 text-xl font-semibold bg-white text-indigo-600 rounded-xl shadow-lg transform transition duration-300 hover:scale-110 hover:bg-gray-100'>
          All Offer Letter Here
          </button>
          

          <button onClick={()=> navigate("/agreement")}
          className='px-8 py-4 text-xl font-semibold bg-white text-pink-600 rounded-xl shadow-lg transform transition duration-300 hover:scale-110 hover:bg-gray-100'
            >
          All Aggreement Here
          </button>
          
        </div>
      </section>
      
      {/* About Section */}
      <section className="w-full py-10 bg-gray-100 flex flex-col items-center text-center px-6 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className=" max-w-2xl text-white ">
          We are dedicated to providing top-notch services and innovative solutions to meet your needs.
        </p>
      </section>
      
      {/* Contact Section */}
      {/* <section className="w-full py-10 bg-white flex flex-col items-center text-center px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl">Reach out to us for inquiries and support.</p>
        <form className="mt-6 flex flex-col items-center">
          <input type="text" placeholder="Your Name" className="mb-4 px-4 py-2 border rounded-lg w-80" />
          <input type="email" placeholder="Your Email" className="mb-4 px-4 py-2 border rounded-lg w-80" />
          <textarea placeholder="Your Message" className="mb-4 px-4 py-2 border rounded-lg w-80 h-24"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section> */}
      
      {/* Footer */}
      <footer className="w-full bg-opacity-90 backdrop-blur-md text-white py-4 text-center text-md shadow-lg border-t border-gray-300">
        &copy; {new Date().getFullYear()} Hsbe Ltd. All Rights Reserved.
      </footer>
    </div>

    </>
  )
}

export default Main