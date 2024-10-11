import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddPlaces() {
    let navigate=useNavigate()


    const [place, setPlaces] = useState({
        placeName: "",
        placeDescription: ""
    });

    const { placeName, placeDescription } = place;

    const onInputChange = (e) => {
        // Use e.target.name which refers to 'placeName' or 'placeDescription'
        setPlaces({ ...place, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/atharaman", place);
        navigate("/")
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h1 className='text-center m-4'>Add Place</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='placeName' className='form-label'>
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Place Name"
                                name="placeName" // Name should match the state property
                                value={placeName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='placeDescription' className='form-label'>
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Place Description"
                                name="placeDescription" // Name should match the state property
                                value={placeDescription}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2'to={"/"}>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPlaces;
