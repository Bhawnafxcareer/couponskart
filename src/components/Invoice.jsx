import React from 'react'

const Invoice = () => {
    const styles = {
        container: {           
            width:'21cm',
            height:'29.7cm',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',           
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        },
        mainHeading: {
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '20px',
            textTransform: 'uppercase'
        },
        subHeading: {
            fontSize: '24px',
            marginBottom: '5px'
        },
        invoiceHeading: {
            fontSize: '16px',
            marginBottom: '10px'
        },
        boldText: {
            fontWeight: 'bold'
        },
        italicText: {
            fontStyle: 'italic'
        },
        address: {
            marginBottom: '5px'
        },
        section: {
            marginBottom: '15px'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '15px'
        },
        th: {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
            backgroundColor: '#f2f2f2'
        },
        td: {
            border: '1px solid #ddd',
            padding: '8px',
            verticalAlign: 'top'
        },
        itemDetail: {
            fontSize: '12px',
            color: '#555',
            marginTop: '5px'
        },
        adapterDetail: {
            padding: '5px 0'
        },
        totalSection: {
            margin: '10px 0',
            textAlign: 'right'
        },
        amountTable: {
            width: '100%',
            marginBottom: '15px'
        },
        amountLabel: {
            width: '30%',
            fontWeight: 'bold',
            padding: '5px 0'
        },
        amountValue: {
            padding: '5px 0'
        },
        paymentSection: {
            margin: '15px 0'
        },
        signature: {
            marginTop: '30px'
        },
        notesSection: {
            margin: '15px 0',
            textAlign: 'center'
        },
        termsSection: {
            margin: '15px 0'
        },
        termsList: {
            paddingLeft: '20px',
            marginTop: '5px'
        },
        footer: {
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#666'
        },
        pText: {
            fontSize: '14px !important'
        },
        logo: {
            float: 'right'
        },
        logoSec: {
            display: 'flex',
            justifyContent: 'space-between',
        }
    };
    return (
        <>
            <div className="invoice-container" style={styles.container}>
            <h1 style={styles.mainHeading}>TAX INVOICE</h1>
                <div style={styles.logoSec}>
                    <div>
                      
                        <div style={styles.section}>
                    <h3 style={styles.invoiceHeading}>Invoice #: INV-1</h3>
                    <p style={styles.boldText}>Customer Details:</p>
                    <p style={styles.boldText}>Amit Agarwal</p>
                    <p>Ph: 9999999999</p>
                </div>

                    </div>
                    <div style={styles.logo}>
                        <img src="/assets/images/logo/logo-two.png" alt="" width={"180px"} />
                        <div style={styles.section}>                            
                            <p style={styles.boldText}>GSTIN 26ADCDE3836RIZQ</p>
                            <p style={styles.pText}>
                                Q-city, 2nd Floor-Block A & Block B Survey
                            </p>
                            <p>Mobile 9999999999</p>
                        </div>
                    </div>
                </div>



                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>#</th>
                            <th style={styles.th}>Item</th>
                            <th style={styles.th}>Rate/Item</th>
                            <th style={styles.th}>Qty</th>

                            <th style={styles.th}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}>1</td>
                            <td style={styles.td}>
                                Samsung Galaxy F23 HSN: 8517

                            </td>
                            <td style={styles.td}>14,405.93</td>
                            <td style={styles.td}>1</td>

                            <td style={styles.td}>16,999.00</td>
                        </tr>
                        <tr>
                            <td style={styles.td}>1</td>
                            <td style={styles.td}>
                                Samsung Galaxy F23 HSN: 8517

                            </td>
                            <td style={styles.td}>14,405.93</td>
                            <td style={styles.td}>1</td>

                            <td style={styles.td}>16,999.00</td>
                        </tr>
                        <tr>
                            <td style={styles.td}>1</td>
                            <td style={styles.td}>
                                Samsung Galaxy F23 HSN: 8517

                            </td>
                            <td style={styles.td}>14,405.93</td>
                            <td style={styles.td}>1</td>

                            <td style={styles.td}>16,999.00</td>
                        </tr>
                    </tbody>
                </table>

         

                <table style={styles.amountTable}>
                    <tbody>
                        <tr>
                            <td style={styles.amountLabel}>Total amount (in words):</td>
                            <td style={styles.amountValue}>INR Nineteen Thousand, Four Hundred And Ninety-Eight Rupees Only.</td>
                        </tr>
                        <tr>
                            <td style={styles.amountLabel}>Amount Payable:</td>
                            <td style={styles.amountValue}>₹19,498.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Invoice