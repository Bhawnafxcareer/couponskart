import React from "react";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";
import Coupons from "../components/Coupons";
const OrdersPage = () => {

  return (

    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* DashboardRefund */}
        <Coupons />

      </MasterLayout>

    </>
  );
};

export default OrdersPage;