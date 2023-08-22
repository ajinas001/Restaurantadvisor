import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




function MainHome_navbar() {
  
  return (
    <>

< nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3" id='nav-nav'>
          <div className="container-xl">
            {/* Logo */}
            <h1 className="navbar-brand text-primary" href="#" >
              RESTAURANT<br/><span className='text-warning'>ADVISOR</span>
            {/* <img
              src="reslogo.svg"
              className="h-8"
              alt="..."
            /> */}
          </h1>
            {/* Navbar toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Nav */}
              <div className="navbar-nav mx-lg-auto">
                <a className="nav-item nav-link active" href="/" aria-current="page">
                  Home 
                </a>
                <a className="nav-item nav-link" href="#">
                  About Us
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact Us
                </a>
                <a className="nav-item nav-link" href="#">
                  View
                </a>
              </div>
              {/* Right navigation */}
              {/* <div className="navbar-nav ms-lg-4">
              <a className="nav-item nav-link"  >
                Sign in
              </a>
            </div> */}
              {/* Action */}
              <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                <a href='/login'><button   className="btn btn-sm btn-primary w-full w-lg-auto">Sign Up

                </button></a>


                {/* Button trigger modal */}

                {/* Modal */}

                {/* <div
                  className="modal fade"
                  id="staticBackdrop"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered" style={{zIndex:10}}>
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              */}

              </div>
            </div>
          </div>
        </nav >


    </>
  )
}

export default MainHome_navbar