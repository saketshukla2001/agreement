import React from 'react'
import PdfGenerator from './PdfGenerator'
import Main from './Main'
import Aggreement from './Aggreement'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Sub } from './Sub'
import Distributor from './Distributor'
import Offer from './Offer'
import { Telecaller } from './Telecaller'

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
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/telecaller",
    element: <Telecaller/>
  },
  {
    path: "/offer-letter/graphic-design",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/hr",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/admin",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/mis",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/accountant",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/godown-incharge",
    element: <PdfGenerator/>
  },
  {
    path: "/offer-letter/suppier",
    element: <PdfGenerator/>
  }

])



const Home = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Home