import React, { useEffect, useState } from 'react';
import './Admincomp.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";

function Admincomponent() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:4001/admin/viewhotelrequests")
      .then((res) => {
        setdata(res.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const accepting = (restuarantid) => {
    console.log("restaurantId ====", restuarantid);
    console.log("api success");
    axios.put('http://localhost:4001/admin/admin-accepting', { restuarantid })
      .then((res) => {
        console.log("Accepted", res);
        navigate('/admin');
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const blocking = (restuarantid) => {
    console.log("restaurantId ===", restuarantid);
    console.log("api success");
    axios.put('http://localhost:4001/admin/admin-blocking', { restuarantid })
      .then((res) => {
        console.log("blocked", res);
        navigate('/admin');
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  
  const unblocking = (restuarantid) => {
    console.log("restaurantId ====", restuarantid);
    console.log("api success");
    axios.put('http://localhost:4001/admin/admin-unblocking', { restuarantid })
      .then((res) => {
        console.log("unblocked", res);
        navigate('/admin');
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const deletehotels = (restuarantid) => {
    console.log("restaurantId ====", restuarantid);
    console.log("api success");
    axios.put('http://localhost:4001/admin/admin-deletehotels', { restuarantid })
      .then((res) => {
        console.log("deleted", res);
        navigate('/admin');
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  
  

  return (
    <>
      <div className='container'>
        <div className=' cards '>
          {data && data.map((hotels) => (
            <div className='container' key={hotels.id}>
              <div className='row'>
                {hotels.status == "pending" ? 
                  <div className="col-lg-3">
                    <div className="card mt-5 shadow-lg" id='admin-card' style={{ width: "18rem" }}>
                      <img src={`/uploadedimages/${hotels.logo}`} className="card-img-top images2" alt="..." id='bg-knr-img' />
                      <div className="card-body">
                        <h5 className="card-title">{hotels.name}</h5>
                        <span>{hotels.phone}  <Link to={`/Admin/hotelhome/hoteldetails/${hotels.restuarantid}`} className='text-end ps-4'>show more
                        </Link><br></br></span><br></br>
                        <p className="card-text">
                          <a href="" value=''>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => accepting(hotels.restuarantid)}
                            >
                              Accept
                            </button>
                            <button type="button" id='rej-btn' className="btn btn-danger ms-3" onClick={()=>deletehotels(hotels.restuarantid)}>
                              Reject
                            </button>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                :hotels.status=="blocked"?
                
                  <div className="col-lg-3">
                    <div className="card mt-5 shadow-lg" id='admin-card' style={{ width: "18rem" }}>
                      <img src={`/uploadedimages/${hotels.logo}`} className="card-img-top images2" alt="..." id='bg-knr-img' />
                      <div className="card-body">
                        <h5 className="card-title">{hotels.name}</h5>
                        <span>{hotels.phone}  <Link to={`/Admin/hotelhome/hoteldetails/${hotels.restuarantid}`} className='text-end ps-4'>show more
                        </Link><br></br></span><br></br>
                        <p className="card-text">
                          <a href="" value=''>
                            <button
                              type="button"
                              className="btn btn-primary"
                              
                            >
                              Accepted
                            </button>
                           
                            <button
                              type="button"
                              className="btn btn-dark ms-1"
                              onClick={()=>unblocking(hotels.restuarantid)}
                            >
                              unblock
                            </button>
                            <MdDelete  className="fs-4" onClick={()=>deletehotels(hotels.restuarantid)} />
                            {/* <button type="button" id='rej-btn' className="btn btn-danger ms-3">
                              Reject
                            </button> */}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                
                : 
                
                  <div className="col-lg-3">
                    <div className="card mt-5 shadow-lg" id='admin-card' style={{ width: "18rem" }}>
                      <img src={`/uploadedimages/${hotels.logo}`} className="card-img-top images2" alt="..." id='bg-knr-img' />
                      <div className="card-body">
                        <h5 className="card-title">{hotels.name}</h5>
                        <span>{hotels.phone}  <Link to={`/Admin/hotelhome/hoteldetails/${hotels.restuarantid}`} className='text-end ps-4'>show more
                        </Link><br></br></span><br></br>
                        <p className="card-text">
                          <a href="" value=''>
                            <button
                              type="button"
                              className="btn btn-primary"
                              
                            >
                              Accepted
                            </button>
                           
                            <button
                              type="button"
                              className="btn btn-danger ms-2"
                              onClick={()=>blocking(hotels.restuarantid)}
                            >
                              block
                            </button>
                            <MdDelete  className="fs-2 ms-2" onClick={()=>deletehotels(hotels.restuarantid)}/>
                            {/* <button type="button" id='rej-btn' className="btn btn-danger ms-3">
                              Reject
                            </button> */}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Admincomponent;
