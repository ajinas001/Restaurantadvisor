import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


function Adminlocation() {
    const [data, setdata] = useState({
    })
   
    const setRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata({ ...data, [name]: value })

    }


    const validation = (e) => {
            axios.post('http://localhost:4000/save/add-district',data)    
            .then((res) => {
                console.log(res);
                Navigate('#')
            })
            .catch((err)=>{
                console.log("error",err);
            });
        
    }

    return (
        <>
            <div className='container'>
                <div className='row' id='log-div0'>

                    <div className='col-lg-12' id='log-div1'>
                        <form onSubmit={validation}>
                            <center> <h1>Add Districts</h1></center> <br />
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                      District
                                </label>
                                <select
                                onChange={setRegister}
                                    name='district'
                                  
                                    type="text"
                                    
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                >
                                     <option value=''>Select your District</option>
                                     <option value='Alappuzha'>Alappuzha</option>
                                     <option value='Ernakulam'>Ernakulam</option>
                                     <option value='Kozhikode'>Kozhikode</option>
                                     <option value='Palakkad'>Palakkad</option>
                                     <option value='Kollam'>Kollam</option>
                                     <option value='Kannur'>Kannur</option>
                                     <option value='Kasaragod'>Kasaragod</option>
                                     <option value='Idukki'>Idukki</option>
                                     <option value='Kottayam'>Kottayam</option>
                                     <option value='Thrissur'>Thrissur</option>
                                     <option value='Pathanamthitta'>Pathanamthitta</option>
                                     <option value='Malappuram'>Malappuram</option>
                                     <option value='Wayanad'>Wayanad</option>
                                     <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
                                  
                                    
                                   
                                    </select>
                               
                               
                            </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            </div>
            </div></div>
        </>
    )
}

export default Adminlocation
