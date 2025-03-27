import React from "react";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";
import DashboardProductManagement from "../components/DashboardProductManagement";

const ProductManagementPage = () => {
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* DashboardRefund */}
        <DashboardProductManagement />

      </MasterLayout>
    </>
  )
}

export default ProductManagementPage
