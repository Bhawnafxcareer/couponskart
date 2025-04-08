import React from 'react'
import OrderDetails from '../components/OrderDetails'

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