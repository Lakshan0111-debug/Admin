import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditPlaces() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [place, setPlaces] = useState({
        placeName: "",
        placeDescription: ""
    });

    const { placeName, placeDescription } = place;

    const onInputChange = (e) => {
        setPlaces({ ...place, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const loadPlaces = async () => {
            const result = await axios.get(`http://localhost:8080/atharaman/${id}`);
            setPlaces(result.data);
        };
        loadPlaces(); // Call the function
    }, [id]); // Only re-run the effect when 'id' changes

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/atharaman/${id}`, place);
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h1 className='text-center m-4'>Edit Place</h1>

                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='placeName' className='form-label'>
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Place Name"
                                name="placeName"
                                value={placeName}
                                onChange={onInputChange}
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
                                name="placeDescription"
                                value={placeDescription}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type="submit" className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to={"/"}>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPlaces;
