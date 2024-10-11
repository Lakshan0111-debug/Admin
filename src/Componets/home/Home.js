import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [places,setPlaces]=useState([])

    const { id }=useParams

    useEffect(()=>{
        console.log('Place add');
        loadPlaces();
    },[]);

    const loadPlaces=async ()=>{
        const result=await axios.get('http://localhost:8080/atharaman')
        setPlaces(result.data);
    }

    const deletePlace=async(id) =>{
        await axios.delete(`http://localhost:8080/atharaman/${id}`)
        loadPlaces()
    }
    
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Place Name</th>
                <th scope="col">Place Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                places.map((place,index)=>(
                    <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{place.placeId}</td>
                <td>{place.placeName}</td>
                <td>{place.placeDescription}</td>
                <td>
                    <Link className='btn btn-primary mx-2'
                    to={`/viewPlace/${place.placeId}`}
                    >View</Link>
                    <Link className='btn btn-outline-primary mx-2'
                    to={`/editPlace/${place.placeId}`}
                    >Edit
                    </Link>
                    <button className='btn btn-danger mx-2'
                    onClick={()=> deletePlace(place.placeId)}
                    >Delete</button>
                </td>
                </tr>
                ))

            }
                
            </tbody>

            
        </table>
        </div>

      
    </div>
  )
}
