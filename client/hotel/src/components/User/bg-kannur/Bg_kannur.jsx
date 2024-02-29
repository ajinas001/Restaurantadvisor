import React, { useEffect, useState } from 'react';
import './Bg_kannur.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Bg_kannur() {
  const [Hotels, setHotels] = useState([]);
  const [Id,setId] = useState()
  const { district } = useParams();
  console.log(Hotels);
  console.log(district);

  useEffect(() => {
    axios.get(`http://localhost:4001/save/view-districtwisehotel/${district}`)
      .then((response) => {
        console.log(response);
        setHotels(response.data.data);
        console.log("hotelss",Hotels);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [district]); 


  // const showhoteldetails = (restuarantid)=>{
  //   console.log(restuarantid);
  //   // setId(restuarantid);
  //   const Id = restuarantid;
  //   console.log("Id==",Id);
  //   axios.get(`http://localhost:4001/save/show-hotel/${ Id }`).then((res)=>{
  //     console.log("response of view hotel details",res)
  //   })
  //   .catch((err)=>{
  //     console.log(err," catch error in view hotel  details api");
  //   })
  // }

  return (
    <>
      <div className='container' id='bg-kan-div'>
        <div className='row col-lg-12 '>
          <h1 className='text-center text-dark'>Top Restaurants</h1>
          <br />
          <br />
          <br></br>
{/* {Hotels.status=="accepted"?} */}
          
          {Hotels.map((hotel) => (
  hotel.status === "accepted" ? (
    <div className="col-lg-3">
      <div className="card shadow-lg" style={{ width: "18rem" }}>
        <img src={`/uploadedimages/${hotel.logo}`} className="card-img-top images2" alt="..." id='bg-knr-img' />
        <div className="card-body">
          <h5 className="card-title">{hotel.name}</h5>
          <p>{hotel.phone}</p>
          <p className="card-text">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i>
            <Link to={`/hotelhome/hoteldetails/${hotel.restuarantid}`} className='ms-3'>
              Show More
            </Link>
          </p>
        </div>
      </div>
    </div>
  ) : (
   <></>
  )
))}


        </div>
      </div>
    </>
  );
}

export default Bg_kannur;
