import React from "react";
import Preloader from "../helper/Preloader";
import MasterLayout from "../layout/MasterLayout";
import Coupons from "../components/Coupons";
import OrdersList from "../components/OrdersList";
const OrdersPage = () => {

  return (

    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

        {/* DashboardRefund */}
        <Coupons />
        <OrdersList />

      </MasterLayout>

    </>
  );
};

export default OrdersPage;