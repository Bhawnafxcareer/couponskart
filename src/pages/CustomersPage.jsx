import  React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MasterLayout from "../layout/MasterLayout";
import Preloader from '../helper/Preloader';
import customers from '../json/customers.json';
import DataTable from 'react-data-table-component';

const CustomersPage = () => {
    const customStyles = {


        headCells: {
          style: {
            padding: '20px 16px',
            color: '#000424',
            fontFamily: ' "Inter", sans-serif',
            fontSize: '16px',
            fontWeight: '600',
          },
        },
        rows: {
          style: {
      
            '&:hover': {
              backgroundColor: '#f1f1f1',
            },
          },
        },
        cells: {
          style: {
            fontSize: '14px',
            padding: '20px 16px',
            flexBasic:'1'
          },
        },
      };
      const [data, setData] = useState(customers);
    const navigate = useNavigate(); // handles route changes

    
    const handleDelete = (id) => {
      const confirmed = window.confirm('Are you sure you want to delete this customer?');
      if (confirmed) {
        setData(data.filter(customer => customer.id !== id));
      }
    };
    
    const handleView = (id) => {
      navigate(`/customers/${id}`);
    };
    
    const handleEdit = (id) => {
      navigate(`/customers/edit/${id}`);
    };
    
    const columns = [
      {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        width: "110px",
      },
      {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
      },
      {
        name: 'Email',
        selector: row => row.email,
      },
      {
        name: 'Phone',
        selector: row => row.phone,
      },
      {
        name: 'Actions',
        cell: row => (
          <>

            <button
              onClick={() => handleView(row.id)}
              className="btn-smm btn-secondary-light  rounded-pill text-center me-2" >
                        <i className="las la-eye"></i>
            </button>
            <button onClick={() => handleEdit(row.id)}  className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
            <i className="las la-edit"></i>
          </button>
          <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill me-2"><i className="las la-trash-alt"></i></button>
          </>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "150px",
      },
    ];
    
  
  return (
    <>
      <MasterLayout>
        {/* Preloader */}
        <Preloader />

  
    <div className="p-4">
      <h3 className="mb-4">All Customers </h3>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
       
        customStyles={customStyles}
      />
    </div>

      </MasterLayout>

    </>
  )
}

export default CustomersPage