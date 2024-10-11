import React from 'react';
import './AddNewLocation.css';
import AdminSidebar from '../../Components/AdminSidebar/AdminSidebar';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const AddNewLocation = () => {
  return (
    <div className='addNew'>
      <AdminSidebar/>
      <div className='addNewContainer'>
        <AdminNavbar/>
        <div className='top'>
          <h1>Add New Location</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <LocationOnSharpIcon className='image'/>
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='icon'/></label>
                <input type='file' id='file' style={{display: "none"}}/>
              </div>
              <div className='formInput'>
                <label>Location ID</label>
                <input type='number' id='id' placeholder='Enter Location ID'/>
              </div>
              <div className='formInput'>
                <label>Location</label>
                <input type='text' id='location' placeholder='Enter Location Name'/>
              </div>
              <div className='formInput'>
                <label>Short Description</label>
                <input type='text' id='shortDes' placeholder='Enter Short Description'/>
              </div>
              <div className='formInput'>
                <label>Long Description</label>
                <input type='text' id='longDes' placeholder='Enter Long Description'/>
              </div>
              <div className='formInput'>
                <label>Province</label>
                <input type='text' id='province' placeholder='Enter Located Province'/>
              </div>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewLocation;