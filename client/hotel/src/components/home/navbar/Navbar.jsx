import React, { useEffect } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  const formfill = localStorage.getItem('formfill')
  console.log(role);
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  useEffect(() => {
    if (!role) {
      navigate('/login')
    }
   
  }, [])
  return (
    <>
      {role == 1 ?
        <div id='div1'>
          <nav class="navbar navbar-expand-lg navbar-light  px-0 py-3 navbgcolor">
            <div class="container-xl">

            <a class="navbar-brand" href="#">
                <h4  className='text-light' id='apptitle'>
                 RESTAURANT ADVISOR </h4> 
                 {/* <img src="/resturantadvisorlogo.png" class="h-8" alt="..."/> */}
                 
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarCollapse">

                <div class="navbar-nav mx-lg-auto">
                  <a class="nav-item nav-link active text-light" href="/user" aria-current="page">Home</a>
                  <a class="nav-item nav-link text-light" href="#">About us</a>
                  <a class="nav-item nav-link text-light" href="#">contact us</a>
                  <a class="nav-item nav-link text-light" href="#">write review</a>
                </div>

                <div class="navbar-nav ms-lg-4">
                  <a class="nav-item nav-link text-light btn btn-sm  w-full w-lg-auto registerbtn" onClick={logout}>Logout</a>
                </div>

                <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                  {/* <a href="#" class="btn btn-sm  w-full w-lg-auto registerbtn text-light">
          Register
        </a> */}


                  {/* <button type="button" class="btn btn-sm  w-full w-lg-auto registerbtn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"
>


  register
</button> */}


                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </nav>
        </div>

        :
        
        role == 2 && formfill == "not added" || formfill=="undefined"  ?
          <div id='div1'>
            <nav class="navbar navbar-expand-lg navbar-light  px-0 py-3 navbgcolor">
              <div class="container-xl">

              <a class="navbar-brand" href="#">
                <h4  className='text-light' id='apptitle'>
                 RESTAURANT  ADVISOR </h4> 
                 {/* <img src="/resturantadvisorlogo.png" class="h-8" alt="..."/> */}
                 
              </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">

                  <div class="navbar-nav mx-lg-auto">
                    <a class="nav-item nav-link active text-light" href="/hotelhome" aria-current="page">Home</a>
                    <a class="nav-item nav-link text-light" href="#">About us</a>
                    <a class="nav-item nav-link text-light" href="/hotelhome/addhotel">Add Details</a>
                    <a class="nav-item nav-link text-light" href="/hotelhome/hoteldetails">View Details</a>
                  </div>

                  <div class="navbar-nav ms-lg-4">
                    <a class="nav-item nav-link text-light btn btn-sm  w-full w-lg-auto registerbtn" onClick={logout}>Logout</a>
                  </div>

                  <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                    {/* <a href="#" class="btn btn-sm  w-full w-lg-auto registerbtn text-light">
          Register
        </a> */}


                    {/* <button type="button" class="btn btn-sm  w-full w-lg-auto registerbtn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"
>


  register
</button> */}


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </nav>
          </div>
          :
          role == 2 && formfill =="added"  ?
          <div id='div1'>
            <nav class="navbar navbar-expand-lg navbar-light  px-0 py-3 navbgcolor">
              <div class="container-xl">

              <a class="navbar-brand" href="#">
                <h4  className='text-light' id='apptitle'>
                 RESTAURANT  ADVISOR </h4> 
                 {/* <img src="/resturantadvisorlogo.png" class="h-8" alt="..."/> */}
                 
              </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">

                  <div class="navbar-nav mx-lg-auto">
                    <a class="nav-item nav-link active text-light" href="/hotelhome" aria-current="page">Home</a>
                    <a class="nav-item nav-link text-light" href="#">About us</a>
                    <a class="nav-item nav-link text-light" href="/hotelhome/addhotel">Edit Details</a>
                    <a class="nav-item nav-link text-light" href="/hotelhome/hoteldetails">View Details</a>
                  </div>

                  <div class="navbar-nav ms-lg-4">
                    <a class="nav-item nav-link text-light btn btn-sm  w-full w-lg-auto registerbtn" onClick={logout}>Logout</a>
                  </div>

                  <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                    {/* <a href="#" class="btn btn-sm  w-full w-lg-auto registerbtn text-light">
          Register
        </a> */}


                    {/* <button type="button" class="btn btn-sm  w-full w-lg-auto registerbtn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"
>


  register
</button> */}


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </nav>
          </div>
          :
        


          role == 0 ?
            <div id='div1'>
              <nav class="navbar navbar-expand-lg navbar-light  px-0 py-3 navbgcolor">
                <div class="container-xl">

                <a class="navbar-brand" href="#">
                <h4  className='text-light' id='apptitle'>
                 RESTAURANT  ADVISOR </h4> 
                 {/* <img src="/resturantadvisorlogo.png" class="h-8" alt="..."/> */}
                 
              </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarCollapse">

                    <div class="navbar-nav mx-lg-auto">
                      <a class="nav-item nav-link active text-light" href="/admin" aria-current="page">Home</a>
                      <a class="nav-item nav-link text-light" href="#">About us</a>
                      <a class="nav-item nav-link text-light" href="/admin/location">Add location</a>
                      <a class="nav-item nav-link text-light" href="#">Pricing</a>
                    </div>

                    <div class="navbar-nav ms-lg-4">
                    <a class="nav-item nav-link text-light btn btn-sm  w-full w-lg-auto registerbtn" onClick={logout}>Logout</a>
                  </div>

                    <div class="d-flex align-items-lg-center mt-3 mt-lg-0">

                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </nav>
            </div>
            :
            <div id='div1'>
              <nav class="navbar navbar-expand-lg navbar-light  px-0 py-3 navbgcolor">
                <div class="container-xl">

                  <a class="navbar-brand" href="#">
                    <h4 className='text-light' id='apptitle'>RESTAURANT <br></br>ADVISOR</h4> 
                     {/* <img src="/__" class="h-8" alt="..."/> */}
                  </a> 

                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarCollapse">

                    <div class="navbar-nav mx-lg-auto">
                      <a class="nav-item nav-link active text-light" href="/mainhome" aria-current="page">Home Page</a>
                      <a class="nav-item nav-link text-light" href="#">About us</a>
                      <a class="nav-item nav-link text-light" href="#">contact us</a>
                      <a class="nav-item nav-link text-light" href="#">Pricing</a>
                    </div>

                    <div class="navbar-nav ms-lg-4">
                      <a class="nav-item nav-link text-light btn btn-sm  w-full w-lg-auto registerbtn" href="/mainhome">Sign in</a>
                    </div>

                    <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </nav>
            </div>
      }

    </>

  )
}

export default Navbar


