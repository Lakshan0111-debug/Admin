import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewPlaces() {

    const[place,setPlaces]=useState({
        placeName:"",
        placeDescription:""
    })

    const {id}=useParams();

useEffect(()=>{
loadPlaces()

},[]);

const loadPlaces=async ()=>{
    const result=await axios.get(`http://localhost:8080/atharaman/${id}`)
    setPlaces(result.data)
}

  return (
    <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h1 className='text-center m-4'>Place Details</h1>

                    <div className='card'>
                        <div className='card-header'>
                            Details of place id: {place.PlaceId}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Place Name:{place.placeName}</b>
                                </li>

                                <li className='list-group-item'>
                                    <b>Place Name:{place.placeDescription}</b>
                                </li>

                            </ul>
                        </div>
                        <Link className='btn btn-primary my-2'to={"/"}>Back to home</Link>


                    </div>
                </div>
            </div>
    </div>


  )
}
