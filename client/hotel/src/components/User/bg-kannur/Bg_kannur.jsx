import React, { useEffect, useState } from 'react'
import './Bg_kannur.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Bg_kannur() {
    const [Hotels, setHotels] = useState([])
    const { district } = useParams([])
    console.log(Hotels);

    const itemId = localStorage.getItem('Restuarant_id')

    useEffect(() => {
        axios.get(`http://localhost:4000/save/view-hotel/${district}`)
            .then((response) => {
                setHotels(response.data.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <div className='container' id='bg-kan-div'>
                <div className='row '>
                    <h1 className='text-center text-dark'>Top Restaurants</h1>
                    <br />
                    <br />
                    <br></br>


                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/hotelimg1.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >MRA Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>1234
                                    <a href=" #" value='' >
                                        Show More
                                    </a></p>
                                {/* <a href="" className="btn btn-warning">
              Delete
            </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/randhal.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >RANDHAL Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="/user/viewdetails" value='' >
                                        Show More
                                    </a></p>
                                {/* <a href="" className="btn btn-warning">
              Delete
            </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/thakkaram.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >Thakkaram Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="#" value='' >
                                        Show More
                                    </a></p>
                                {/* <a href="" className="btn btn-warning">
              Delete
            </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/sufimakthan.jpg" className="card-img-top images2" alt="..." id='bg-knr-img' />
                            <div className="card-body">
                                <h5 className="card-title" >Sufi-Makhan Restaurant</h5>
                                <p className="card-text"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                                    <a href="#" value='' >
                                        Show More
                                    </a></p>
                                {/* <a href="" className="btn btn-warning">
              Delete
            </a> */}
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>


        </>
    )
}

export default Bg_kannur