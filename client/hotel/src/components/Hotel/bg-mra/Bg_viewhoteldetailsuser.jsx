import { useEffect, useState } from 'react'
import axios from 'axios'
import './Bg_mra.css'
import { useParams } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bg_mra() {
    const [item, setItem] = useState({});
    const [wholeratings, setWholeratings] = useState(null);
    const [foodRating, setFoodRating] = useState(null);
    const [serviceRating, setServiceRating] = useState(null);
    const [valueRating, setValueRating] = useState(null);
    const [atmosphereRating, setAtmosphereRating] = useState(null);
    const [overallRating, setoveralleRating] = useState(null);

    console.log(item);
    const { restuarantid } = useParams() || {};
    const userid = localStorage.getItem("user_id")

    console.log("restid", restuarantid);
    console.log("userid", userid);


    useEffect(() => {
        console.log("restid==", restuarantid);
        axios.get(`http://localhost:4001/save/view-hotel/${restuarantid}`)
            .then((res) => {
                console.log('response view hotel', res);
                setItem(res.data.data)
                setWholeratings(res.data.data.ratings);
                console.log(wholeratings);

                console.log(wholeratings.overallRating);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [restuarantid])

    let sum = 0, length, average
    if (wholeratings) {
        wholeratings.map((data) => {
            sum = sum + data.overallRating;
        });
        length = wholeratings.length
        average = Math.round(sum / wholeratings.length)

    }
    console.log(sum);
    console.log(average);



    const handleFoodRating = (value) => {
        setFoodRating(value);
    };

    const handleServiceRating = (value) => {
        setServiceRating(value);
    };

    const handleValueRating = (value) => {
        setValueRating(value);
    };
    const handleoverallRating = (value) => {
        setoveralleRating(value);
    }

    const handleAtmosphereRating = (value) => {
        console.log(value);
        setAtmosphereRating(value);
        console.log(atmosphereRating);
    };

    const handleSubmitRatings = () => {
        // Here you can send the ratings to your MongoDB backend
        const ratingsData = {
            foodRating,
            serviceRating,
            valueRating,
            atmosphereRating,
            overallRating,
            restuarantid,
            userid
        };

        axios.post('http://localhost:4001/save/saverating', ratingsData)
            .then((res) => {
                console.log('Rating success', res);
                // setItem(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
        // console.log('Submitting ratings:', ratingsData);
    };

    return (
        <>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            ></Box>

            {(item.status !== "pending" ?
                <>
                    <div className='container' id='mra-container-1'>
                        <div className='row'>
                            <div className='col' id='bg-mra-div1'>
                                <img src={`/uploadedimages/${item.logo}`} id='logo'></img>
                                <h1 id='bg-mra-head1'>
                                    {item.name}<br></br>
                                   
                                </h1><br></br>



                            </div>
                            <div className='' id='bg-mra-div2'>
                                <p>Indian ,Asian ,VegetarianFriendly
                                    <br />  |<i class="bi bi-geo-alt-fill"></i> {item.place} |
                                    <i class="bi bi-telephone"></i>  India+91{item.phone}
                                    |  <i class="bi bi-laptop"></i>Website  | <i class="bi bi-clock"></i>  +{item.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className='container' id='mra-container-1'>
                        <div className='row' id='bg-mra-img-div'>
                            <div className='col-lg-12 '>
                                <div className="container text-center">
                                    <div className="row">
                                        {item.images &&
                                            item.images.map((image, index) => (
                                                <div className="col p-5" key={index}>
                                                    <img src={`/uploadedimages/${item.images[index]}`} className="img-fluid" id="uploadimages" />
                                                </div>
                                            ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='container' id='mra-container-2'>
                        <div className='row' id='bg-mra-div2'>



                            {/* <div className='col-lg-6 ' id='bg-mra-div21'>
            <h4 className='text-center'>
                Ratings and reviews
            </h4><br />
            <h3><i>4   </i>     <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
            </i> <i class="bi bi-circle-fill text-success" ></i> <i class="bi bi-circle text-success"></i> </h3>
            <p>1234 Reviews</p><br />
            <hr className='bg-dark'></hr>
            <h5>Ratings</h5>
            <br />
            <div className='row'>
                <div className='col'>
                    <p>Food</p>
                    <p>Service</p>
                    <p>Value</p>
                    <p>Atmosphere</p><br />
                </div>
                <div className='col'>

                   
                </div>
            </div>
        </div>


                        <div className='col-lg-6 ' id='bg-mra-div21'>
                            <h4 className='text-center'>
                                Details

                            </h4> <br />
                            <p>CUISINES</p>
                            <p>Indian, Asian</p> <br />
                            <p>
                                SPECIAL DIETS
                            </p>
                            <p>{item.special}</p> <br />
                            <p>MEALS</p>
                            <p>{item.meals}</p> <br />
                            <p>FEATURES</p>
                            <p>{item.feature}</p>
                        </div>


                        <div className='col-lg-12' id='bg-mra-div21'>
                            <h4 className='text-center'>
                                Location Details
                            </h4><br />

                            <p><i class="bi bi-geo-alt-fill"></i> {item.place}, {item.distrt} {item.pin} </p><br />
                            <p> <i class="bi bi-telephone"></i>  India+91 {item.phone}</p><br />
                            <p><i class="bi bi-laptop"></i>Website </p>
                        </div> */}

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='ratings-reviews-container'>
                                        <h4 className='section-title text-center'>Ratings and Reviews</h4>
                                        <div className='rating-container'>
                                            <span className='rating-value'>{`${average}`}.0   {average !== null && (
                                                <Rating name="read-only" value={`${average}`} readOnly />
                                            )}</span>
                                        </div>
                                        <p className='reviews-count'>({length}) Reviews</p>
                                        <hr className='divider'></hr>
                                        <h5 className='ratings-title'>Ratings</h5>
                                        <div className='ratings-details'>
                                            <div className='rating-item'>
                                                <p>Food</p>
                                                <Rating name="read-only" value={`${average}`} readOnly />
                                                <p>Service</p>
                                                <Rating name="read-only" value={`${average}`} readOnly />
                                                <p>Value</p>
                                                <Rating name="read-only" value={`${average}`} readOnly />
                                                <p>Atmosphere</p>
                                                <Rating name="read-only" value={`${average}`} readOnly />
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='restaurant-details-container'>
                                        <h4 className='section-title text-center'>Details</h4>
                                        <div className='details-list'>
                                            <p><strong>CUISINES:</strong> Indian, Asian</p><br></br>
                                            <p><strong>SPECIAL DIETS:</strong> {item.special}</p><br></br>
                                            <p><strong>MEALS:</strong> {item.meals}</p><br></br>
                                            <p><strong>FEATURES:</strong> {item.feature}</p><br></br>
                                        </div>
                                        <div className='location-details'>
                                            <h4 className='section-title text-center'>Location Details</h4>
                                            <p><i class="bi bi-geo-alt-fill"></i> {item.place}, {item.distrt} {item.pin}</p>
                                            <p><i class="bi bi-telephone"></i> India+91 {item.phone}</p><br></br>
                                            <p><i class="bi bi-laptop"></i> Website</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 justify-content-center p-5'>
                                <div className='ratings-reviews-container'>
                                    <h4 className='section-title text-center'><i class="bi bi-pen-fill me-4"></i>Add Your Reviews</h4>
                                    <div className='rating-container'>
                                        <span className='rating-value'>4.0 <Rating value={overallRating} onChange={(e, newvalue) => handleoverallRating(newvalue)} /></span>
                                    </div>
                                    {/* <p className='reviews-count'> Reviews</p> */}
                                    <hr className='divider'></hr>
                                    <h5 className='ratings-title'>Ratings</h5>
                                    <div className='ratings-details'>
                                        <div className='rating-item'>
                                            <p>Food</p>
                                            <Rating value={foodRating} onChange={(event, newValue) => handleFoodRating(newValue)} />
                                            <p>Service</p>
                                            <Rating value={serviceRating} onChange={(event, newValue) => handleServiceRating(newValue)} />
                                            <p>Value</p>
                                            <Rating value={valueRating} onChange={(event, newValue) => handleValueRating(newValue)} />
                                            <p>Atmosphere</p>
                                            <Rating value={atmosphereRating} onChange={(event, newValue) => handleAtmosphereRating(newValue)} />
                                        </div>

                                        <button type="button" class="btn btn-success" onClick={handleSubmitRatings}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>




                :


                <>
                    <h2>Admin will soon approve request.Thank you!!</h2>
                </>

                // <>
                //     <div className='container' id='mra-container-1'>
                //         <div className='row'>
                //             <div className='col' id='bg-mra-div1'>
                //                 <img src={`/uploadedimages/${item.logo}`} id='logo'></img>
                //                 <h1 id='bg-mra-head1'>
                //                     {item.name}
                //                 </h1><br></br>
                //             </div>
                //             <div className='' id='bg-mra-div2'>
                //                 <p>Indian ,Asian ,VegetarianFriendly
                //                     <br />  |<i class="bi bi-geo-alt-fill"></i> {item.place} |
                //                     <i class="bi bi-telephone"></i>  India+91{item.phone}
                //                     |  <i class="bi bi-laptop"></i>Website  | <i class="bi bi-clock"></i>  +{item.time}</p>
                //             </div>
                //         </div>
                //     </div>
                //     <div className='container' id='mra-container-1'>
                //         <div className='row' id='bg-mra-img-div'>
                //             <div className='col-lg-12 '>
                //                 <div className="container text-center">
                //                     <div className="row">
                //                         {item.images &&
                //                             item.images.map((image, index) => (
                //                                 <div className="col p-5" key={index}>
                //                                     <img src={`/uploadedimages/${item.images[index]}`} className="img-fluid" id="uploadimages" />
                //                                 </div>
                //                             ))}
                //                     </div>
                //                 </div>

                //             </div>
                //         </div>
                //     </div>
                //     <div className='container' id='mra-container-2'>
                //         <div className='row' id='bg-mra-div2'>
                //             {/* 
                //     <div className='col-lg-4 ' id='bg-mra-div21'>
                //         <h4 className='text-center'>
                //             Ratings and reviews
                //         </h4><br />
                //         <h3><i>4   </i>     <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success"></i> <i class="bi bi-circle-fill text-success">
                //         </i> <i class="bi bi-circle-fill text-success" ></i> <i class="bi bi-circle text-success"></i> </h3>
                //         <p>1234 Reviews</p><br />
                //         <hr className='bg-dark'></hr>
                //         <h5>Ratings</h5>
                //         <br />
                //         <div className='row'>
                //             <div className='col'>
                //                 <p>Food</p>
                //                 <p>Service</p>
                //                 <p>Value</p>
                //                 <p>Atmosphere</p><br />
                //             </div>
                //             <div className='col'>


                //             </div>
                //         </div>
                //     </div> */}
                //             <div className='col-lg-6 ' id='bg-mra-div21'>
                //                 <h4 className='text-center'>
                //                     Details

                //                 </h4> <br />
                //                 <p>CUISINES</p>
                //                 <p>Indian, Asian</p> <br />
                //                 <p>
                //                     SPECIAL DIETS
                //                 </p>
                //                 <p>{item.special}</p> <br />
                //                 <p>MEALS</p>
                //                 <p>{item.meals}</p> <br />
                //                 <p>FEATURES</p>
                //                 <p>{item.feature}</p>
                //             </div>
                //             <div className='col-lg-6' id='bg-mra-div21'>
                //                 <h4 className='text-center'>
                //                     Location Details
                //                 </h4><br />

                //                 <p><i class="bi bi-geo-alt-fill"></i> {item.place}, {item.distrt} {item.pin} </p><br />
                //                 <p> <i class="bi bi-telephone"></i>  India+91 {item.phone}</p><br />
                //                 <p><i class="bi bi-laptop"></i>Website </p>
                //             </div>
                //         </div>
                //     </div >
                // </>
            )}

        </>
    )
}

export default Bg_mra