import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./PlacesTable.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const StudentsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/getAllPlaces')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the places!", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this place?")){
      axios.delete(`/deletePlace/${id}`)
      .then(response => {
        setData(data.filter((item) => item.studentID !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the place!", error);
      });
    }
  };

  const studentColumns = [
    { field: 'placeID', headerName: 'Place Id', width: 100 },
    { field: 'placeName', headerName: 'Place Name', width: 280 },
    { field: 'placeShortDestription', headerName: 'place Short Destription', width: 150 },
  ];

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellaction'>
            <Link to={`/students/${params.row.studentID}`} style={{ textDecoration: "none" }}>
              <div className='viewbutton'>View</div>
            </Link>
            <div className='deletebutton' onClick={() => handleDelete(params.row.studentID)}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='studentstable'>
      <div className='studentstabletitle'>
        <span>Students List</span>
        <Link to="/students/new" style={{ textDecoration: "none" }}>
          <span className='link'>Add New</span>
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={studentColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.studentID}
      />
    </div>
  );
};

export default StudentsTable;
