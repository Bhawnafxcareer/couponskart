import React from 'react'
import OrderDetails from '../components/OrderDetails'
import Preloader from '../helper/Preloader'
import MasterLayout from '../layout/MasterLayout'

const OrderDetailsPage = () => {
    return (
        <>
        <MasterLayout>
            {/* Preloader */}
            <Preloader />

            {/* DashboardRefund */}
            <OrderDetails />

        </MasterLayout>
        </>
    )
}

export default OrderDetailsPage