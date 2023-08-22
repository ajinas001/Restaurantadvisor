import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  // const [data,setdata] = useState({});
  // console.log("data",data);
  // const setregister = (event)=>{
  //   const name = event.target.name
  //   const value = event.target.value
  //   setdata({...data,[name]:value})
  // }
  // console.log("data",data);



  //   const submitb = (event)=>{
  //     event.preventDefault()
  //   axios.post('http://localhost:4000/save/save-login',data).then((res)=>{
  //     console.log("res",res);
  //     window.location.reload();


  //   })
  // }
  // useEffect(() => {
  //   localStorage.setItem("datas", JSON.stringify(res.data.role,res.data.restuarant._id))
  // })

  const navigate = useNavigate();
  const [contacts, setContacts] = useState({
    name: "",
    password: ""
  })
  console.log(contacts);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleInputchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setContacts({ ...contacts, [name]: value })
  }

  const validate = (values) => {
    var error = {}
    if (!values.name) {
      error.name = "Enter username"
    }
    if (!values.password) {
      error.password = "Enter password"
    }
    return error
  }

  const validation = (e) => {
    e.preventDefault();
    setFormErrors(validate(contacts))
    setIsSubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post('http://localhost:4000/save/save-login', contacts)
        .then((res) => {
          
          console.log(res);

          
  

          // window.location.reload()
          if (res.data.role == 1) {
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("user_id", res.data.login_id)
            navigate('/user')
          }
          if (res.data.role == 2) {
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("Restuarant_id", res.data.login_id)
            navigate('/hotelhome')
          }
          if (res.data.role == 0) {
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("Restuarant_id", res.data.login_id)
            navigate('/admin')
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  return (
    <>

      <div className='loginpageborder'>

        <form onSubmit={validation}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>

            <input
              type="text"
              name='name'
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"

              onChange={handleInputchange}
              onClick={() => { setFormErrors({ formErrors, name: "" }) }}
            />
            <span style={{ color: formErrors.name ? "red" : "" }}>{formErrors.name}</span>
            <div id="emailHelp" className="form-text">

            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>


            <input
              type="password"
              name='password'
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleInputchange}
              onClick={() => { setFormErrors({ formErrors, password: "" }) }}
            />
            <span style={{ color: formErrors.password ? "red" : "" }}>{formErrors.password}</span>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>

      </div>

    </>
  )
}

export default Login
