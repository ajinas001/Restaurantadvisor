import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Register.css'
import { useNavigate } from 'react-router-dom';
function Register() {







  const navigate = useNavigate();


  const [data, setdata] = useState({
    username: "",
    password: "",
    email: "",
    district: ""
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
    if (!values.username) {
      error.username = "Enter username"
    }

    if (!values.email) {
      error.email = "Enter email"
    }
    if (!values.password) {
      error.password = "Enter password"
    }
    if (!values.district) {
      error.district = "Enter district"
    }
    return error
  }



  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(data))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-hotel', data)
        .then((res) => {
          navigate('/user');
          console.log("res", res);
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }







  return (
    <>
      {/* Button trigger modal */}
      <button id='reg-btn-u'
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Hotel
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Hotel
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body"><form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Restaurant name
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, username: "" }) }}
                  type="text"
                  name='username'
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <span style={{ color: formErrors.username ? "red" : "" }}> {formErrors.username} </span>
                <div id="emailHelp" className="form-text">
                </div>
              </div>
              {/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Place
    </label>
    <input
      type="text"
      name='place'
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     Phone no
    </label>
    <input
      type="text"
      name='phone'
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     Working time
    </label>
    <input
      type="text"
      name='time'
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
    </div>
  </div>
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
    Restaurant Logo
  </label>
  <input className="form-control" type="file" id="formFile" />
</div> */}

              {/* <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
   Images
  </label>
  <input className="form-control" type="file" id="formFile" />
  </div>
  <div className="mb-3">
  <input className="form-control" type="file" id="formFile" />

</div> */}
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
                  District
                </label>
                <select
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, district: "" }) }}
                  type="text"
                  name='district'
                  className="form-control"
                  id="exampleInputPassword1"
                >
                  <option value=''>Select your district</option>
                  <option value='kannur'>kannur</option>
                  <option value='calicut'>calicut</option>
                  <option value='malappuram'>malappuram</option>
                  <option value='kasargod'>kasaragod</option>
                  </select>
                <span style={{ color: formErrors.district ? "red" : "" }}> {formErrors.district} </span>
              </div>

              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Select District
                </label>

                <select className="dropdown-item">

                  Select District
                  <option
                    name='kannur'
                  >
                    Kannur
                  </option>
                  <option name='calicut'
                  >
                    Calicut
                  </option>
                </select>
              </div> */}



              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  District
                </label>
                <input
                  onChange={setRegister}
                  onClick={() => { setFormErrors({ ...formErrors, district: "" }) }}
                  type="radio"
                  name='district'
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <span style={{ color: formErrors.dis ? "red" : "" }}> {formErrors.district} </span>
              </div> */}
            </form>
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
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register