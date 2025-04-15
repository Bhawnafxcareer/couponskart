import React, { useRef } from 'react'
import Preloader from '../helper/Preloader';
import MasterLayout from '../layout/MasterLayout';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';

const Invoice = () => {
    const { orderId } = useParams();
    const invoiceRef = useRef();

    const handleDownloadPDF = () => {
        const input = invoiceRef.current;
        html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            let heightLeft = pdfHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();

            while (heightLeft > 0) {
                position = heightLeft - pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
                heightLeft -= pdf.internal.pageSize.getHeight();
            }

            pdf.save('invoice.pdf');
        });
    };

    const styles = {
        container: {
            width: '21cm',
            height: '29.7cm',
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
            padding: '20px 15px',
            textAlign: 'left',
            backgroundColor: '#f2f2f2'
        },
        td: {
            border: '1px solid #ddd',
            padding: '20px 15px',
            verticalAlign: 'top',
           
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
            marginBottom: '15px',
            textAlign: 'right'
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
            marginBottom: '5rem',
             marginTop: '5rem'
        }
    };
    return (
        <>
            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">
                    <div className="invoice-container"  ref={invoiceRef} style={styles.container}>
                        <h1 style={styles.mainHeading}>TAX INVOICE</h1>
                        <div style={styles.logoSec}>
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
                            <div>

                                <div style={styles.section}>
                                    <h3 style={styles.invoiceHeading}>Invoice #: INV-1</h3>
                                    <p style={styles.boldText}>Customer Details:</p>
                                    <p style={styles.boldText}>Amit Agarwal</p>
                                    <p>Ph: 9999999999</p>
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
                                <tr>
                                    <td style={{ ...styles.td, fontWeight: '600'}} colSpan={4} align='right'>Sub Total:</td>


                                    <td style={styles.td} colSpan={1}>₹16,999.00</td>
                                </tr>
                                <tr>
                                    <td style={{ ...styles.td, fontWeight: '600' }} colSpan={4} align='right'>Discount Total:</td>


                                    <td style={styles.td} colSpan={1}>-₹ 999.00</td>
                                </tr>
                                <tr>
                                    <td style={{ ...styles.td, fontWeight: '600' }} colSpan={4} align='right'>Amount Payable:</td>


                                    <td style={styles.td} colSpan={1}>₹16,999.00</td>
                                </tr>
                            </tbody>
                        </table>

                      
                            <div className="text-end d-print-none">
                            <button className="btn btn-sm  btn-main me-2" onClick={() => window.print()}>
                                Print
                            </button>
                            <button className="btn btn-sm btn-main" onClick={handleDownloadPDF}>
                                Download PDF
                            </button>
                            </div>


                    </div>
                    </div>
            </MasterLayout>
        </>

    )
}

export default Invoice