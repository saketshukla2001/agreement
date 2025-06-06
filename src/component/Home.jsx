import React from 'react'
import PdfGenerator from './PdfGenerator'
import Main from './Main'
import Aggreement from './Aggreement'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sub } from './Sub'
import Distributor from './Distributor'
import Offer from './Offer'
import { Telecaller } from './Telecaller'
import Asm from './Asm'
import Vendorss from './Vendorss'
import Delivery from './Delivery'
import Superstockwine from './Superstockwine'
import Wineparcel from './Wineparcel'
import DistrictDistributor from './DistrictDistributor'
import Salesofficer from './Salesofficer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  
  {
    path: "/offer-letter",
    element: <Offer/>
  },
  {
    path: "/agreement",
    element: <Sub/>
  },

  {
    path: "/super-stockist",
    element: <Aggreement/>
  },

  {
    path: "/distribution",
    element: <Distributor/>
  },

  {
    path: "/offer-letter/area-sales-manager",
    element: <Asm/>
  },

  {
    path: "/offer-letter/sales-officer",
    element: <Salesofficer/>
  },


  {
    path: "/offer-letter/telecaller",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/graphic-design",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/hr",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/admin",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/mis",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/accountant",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/godown-incharge",
    element: <Telecaller/>
  },

  {
    path: "/offer-letter/suppier",
    element: <Telecaller/>
  },
  {
    path: "agreement/vendor",
    element: <Vendorss/>
  },
  {
    path: "agreement/delivery",
    element: <Delivery/>
  },
  {
    path: "/wine-superstokist",
    element: <Superstockwine/>
  },
  {
    path: "/wine-parcle",
    element: <Wineparcel/>
  },
  {
    path: "/district-distributor",
    element: <DistrictDistributor/> 
  }

])



const Home = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Home