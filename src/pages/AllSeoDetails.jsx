import React, {useState} from 'react'
import MasterLayout from '../layout/MasterLayout'
import Preloader from '../helper/Preloader'
import DataTable from 'react-data-table-component';
import seoData from '../json/SEOdetails.json'
import { useNavigate } from 'react-router-dom';
const AllSeoDetails = () => {
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
          },
        },
      };

  const navigate = useNavigate(); // For redirection
  // Function to redirect to edit page
  const handleEdit = (id) => {
    navigate(`/edit-seo/${id}`);
  };
  const [data, setData] = useState(seoData);
  
  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const columns = (handleDelete) => [
    {
      name: "S. No.",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "110px",
    },
    {
      name: "Page Name",
      selector: (row) => row.pageName,
      sortable: true,
    },
    {
      name: "SEO Title",
      selector: (row) => row.seoTitle,
      sortable: true,
    },
    {
      name: "SEO Keywords",
      selector: (row) => row.seoKeywords,
    },
    {
      name: "SEO Description",
      selector: (row) => row.seoDescription,
      wrap: true,
    },
    {
      name: "Actions",
      cell: row => (
        <>
   
          <button onClick={() => handleEdit(row.id)}  className="btn-smm btn-info-transparent rounded-pill text-center me-2" >
            <i className="las la-edit"></i>
          </button>
          <button onClick={() => handleDelete(row.id)} className="btn-smm btn-danger-transparent dlt rounded-pill"><i className="las la-trash-alt"></i></button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

    return (
        <>
            <MasterLayout>
                {/* Preloader */}
                <Preloader />
                <div className="dashboard-body__content">

                    <div className="row gy-4">
                        <div className="col-lg-12">
                            <DataTable
                                columns={columns(handleDelete)}
                                data={data}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}
                            />

                        </div>
                    </div>
                </div>
            </MasterLayout>
        </>
    )
}

export default AllSeoDetails