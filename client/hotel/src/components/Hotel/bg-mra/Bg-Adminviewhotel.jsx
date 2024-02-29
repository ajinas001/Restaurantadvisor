import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Bg_mra.css'
import { useParams } from 'react-router-dom';
function Bg_Adminviewhotel() {
    const [item, setItem] = useState({});

    console.log(item);
    const { restuarantid } = useParams() || {};
    console.log("restid",restuarantid);

   
    useEffect(() => {
        console.log("restid==",restuarantid);
        axios.get(`http://localhost:4001/save/view-hotel/${restuarantid}`)
            .then((res) => {
                console.log('response view hotel', res);
                setItem(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [restuarantid])

    return (
        <>

       
      
            <>
                <div className='container' id='mra-container-1'>
                    <div className='row'>
                        <div className='col' id='bg-mra-div1'>
                            <img src={`/uploadedimages/${item.logo}`} id='logo'></img>
                            <h1 id='bg-mra-head1'>
                                {item.name}




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
                        {/* 
        <div className='col-lg-4 ' id='bg-mra-div21'>
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
        </div> */}
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
                        <div className='col-lg-6' id='bg-mra-div21'>
                            <h4 className='text-center'>
                                Location Details
                            </h4><br />

                            <p><i class="bi bi-geo-alt-fill"></i> {item.place}, {item.distrt} {item.pin} </p><br />
                            <p> <i class="bi bi-telephone"></i>  India+91 {item.phone}</p><br />
                            <p><i class="bi bi-laptop"></i>Website </p>
                        </div>
                    </div>
                </div >
            </>




           


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
       

   
    )
}

export default Bg_Adminviewhotel