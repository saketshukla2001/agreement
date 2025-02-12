import React from 'react'
import {useReactToPrint} from "react-to-print"

const Navbar = () => {

    const handlePrint = useReactToPrint({
        content: ()=> letterRef.currents,
        documentTitle: "Joining_Letter"

    })

  return (
    <>
    <div>
        <div>
            <h1>Hello sir here we are downloading the pdf code </h1>
        </div>

        <div>
            <button onClick={handlePrint}>
                Download as Pdf
            </button>
        </div>
    </div>
    </>
  )
}

export default Navbar