import React from 'react'
import DashboardInvoices from '../components/DashboardInvoices'
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";

const InvoicePage = () => {
  return (
    <>
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* DashboardStatement */}
      <DashboardInvoices />

    </MasterLayout>

  </>
  )
}

export default InvoicePage