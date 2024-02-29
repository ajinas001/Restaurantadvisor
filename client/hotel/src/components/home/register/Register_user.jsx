import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import './Register_user.css'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from 'react-router-dom';
function Register_user() {



    const [data, setdata] = useState({
        name: "",
        password: "",
        email: "",
        phone: ""
    })
    console.log(data);


    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const setRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata({ ...data, [name]: value })
    }
    const validate = (values) => {

        var error = {}
        if (!values.name) {
            error.username = "Enter username"
        }

        if (!values.email) {
            error.email = "Enter email"
        }
        if (!values.password) {
            error.password = "Enter password"
        }
        if (!values.phoneno) {
            error.phone = "Enter phone no"
        }
        return error
    }



    const validation = (e) => {
        e.preventDefault();
        setFormErrors(validate(data))
        setIsSubmit(true)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post('http://localhost:4001/save/save-user', data)
                .then((res) => {
                    console.log("res", res);
                    // Navigate('/login')
                    toast.success(res.data.message)
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.response.data.message)
                })
        }
    }







    return (
        <>
            {/* Button trigger modal */}
            <button
                id='reg-btn-u'
                type="button"
                className="btn btn-danger "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                User
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                User
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Name
                                </label>
                                <input
                                    onChange={setRegister}
                                    onClick={() => { setFormErrors({ ...formErrors, name: "" }) }}
                                    type="text"
                                    name='name'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                                <span style={{ color: formErrors.name ? "red" : "" }}> {formErrors.name} </span>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    onChange={setRegister}
                                    onClick={() => { setFormErrors({ ...formErrors, email: "" }) }}
                                    type="email"
                                    name='email'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <span style={{ color: formErrors.email ? "red" : "" }}> {formErrors.email} </span>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    onChange={setRegister}
                                    onClick={() => { setFormErrors({ ...formErrors, password: "" }) }}
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                                <span style={{ color: formErrors.password ? "red" : "" }}> {formErrors.password} </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Phone no
                                </label>
                                <input
                                    onChange={setRegister}
                                    onClick={() => { setFormErrors({ ...formErrors, phone: "" }) }}
                                    type="text"
                                    name='phoneno'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                                <span style={{ color: formErrors.phone ? "red" : "" }}> {formErrors.phone} </span>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Check me out
                                </label>
                            </div> */}



                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" onClick={validation} className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register_user