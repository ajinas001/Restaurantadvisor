import React, { useState,useEffect } from 'react'
import './Hotelhomebg.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../home/navbar/Navbar';
function  Hotelhomebg() {


const id= localStorage.getItem("Restaurant_id")
  const [hoteldetails,setHoteldetails] = useState()
  useEffect(()=>{
    axios.post("http://localhost:4001/save/idfinding", { id }).then((res) => {
        localStorage.setItem("formfill","added")
    console.log(res)
    setHoteldetails(res.data.data);
}).catch((err) => {
    console.log("catch error", err);
});
},[]);
    return (
        <>
 <Navbar/>
            <div id='bgdivs' className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6' id='bgdiv1'>

            <h1 id='bgheading'>
                            Welcome <br></br><span id='bgheadingspan' >
                              Add Your Details
                            </span>
                            <br />
                            {(hoteldetails==null)?<Link to='/hotelhome/addhotel'>
                                <button type="button" class="btn btn-warning">Add Details</button></Link>
                                
                                :
                                
                                <Link to='/hotelhome/addhotel'>
                                <button type="button" class="btn btn-warning">Edit Details</button></Link>}
                            
                        </h1>
                    </div>

                    <div className='col-lg-6' id='bgdiv2'>

                        <img id='bgimg1' src='/down.jpeg'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotelhomebg