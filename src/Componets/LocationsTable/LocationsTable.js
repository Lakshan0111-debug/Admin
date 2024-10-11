import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./LocationsTable.css";
import { locationColumns, locationRows } from "../../locationsTableSource";
import { Link } from "react-router-dom";

const LocationsTable = () => {
  const [data, setData] = useState(locationRows);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to='/admin/manageLocations/locationId'><span className="viewButton">View</span></Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="locationsTable">
      <div className="locationsTableTitle">
        <span>Locations List</span>
        <Link to='/admin/manageLocations/addNew'><span className="link">Add New</span></Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={locationColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default LocationsTable;