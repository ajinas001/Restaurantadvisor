import React from 'react'
import './Review_mra.css'
import BasicRating from '../../User/Sample'

function Review_mra() {
    return (
        <>
            <div className='container'>
                <div className='row' >
                    <div className='col-lg-6 bg-light' id='bg-mra-reviews-0'>
                        <div id='rev-mra-div1'>
                            <h4 id='mra-rev-h4'>Reviews (1234)   <BasicRating/></h4>
                           
                            {/* <button id='rev-mra-btn' className="btn btn-sm btn-primary ">Write a review</button><br /> */}
                            <hr className='text-dark'></hr>
                        </div>
                    
                    <hr className='text-dark'></hr>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                defaultValue="option1"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Excellent
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Very Good
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios3"
                                defaultValue="option3"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Average
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios4"
                                defaultValue="option3"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="exampleRadios4">
                                Poor
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios3"
                                defaultValue="option3"
                                disabled=""
                            />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Terrible
                            </label>
                            <br></br>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Review_mra