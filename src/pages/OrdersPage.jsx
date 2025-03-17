import React from "react";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";
import Orders from "../components/Orders";
const OrdersPage = () => {

  return (

    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* DashboardRefund */}
        <Orders />

      </MasterLayout>

    </>
  );
};

export default OrdersPage;