import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
     <footer>
    
    <div className="container-fluid navbgcolor  py-5" id='div1'>
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase border-start text-light  border-light ps-3 mb-4">
              Get In Touch
            </h5>
            <p className="mb-4 text-light  border-light">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor
            </p>
            <p className="mb-2 text-light  border-light">
              <i className="bi bi-geo-alt text-light  border-light me-2" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 text-light  border-light">
              <i className="bi bi-envelope-open text-light  border-light me-2" />
              info@example.com
            </p>
            <p className="mb-0 text-light  border-light">
              <i className="bi bi-telephone text-light  border-light me-2" />
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <h5 className="text-uppercase border-start text-light  border-light ps-3 mb-4">
              Quick Links
            </h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Home
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                About Us
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Our Services
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Meet The Team
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Latest Blog
              </a>
              <a className="text-light" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <h5 className="text-uppercase border-start text-light border-light ps-3 mb-4">
              Popular Links
            </h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Home
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                About Us
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Our Services
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Meet The Team
              </a>
              <a className="text-light mb-2" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Latest Blog
              </a>
              <a className="text-light" href="#">
                <i className="bi bi-arrow-right text-light me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-light">
            <h5 className="text-uppercase border-start  border-light text-light ps-3 mb-4">
              Newsletter
            </h5>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Your Email"
                />
                <button className="btn btn-dark">Sign Up</button>
              </div>
            </form>
            <h6 className="text-uppercase mt-4 mb-3 text-light">Follow Us</h6>
            <div className="d-flex">
              <a className="btn btn-outline-light btn-square me-2" href="#">
                <i className="bi bi-twitter" />
              </a>
              <a className="btn btn-outline-light btn-square me-2" href="#">
                <i className="bi bi-facebook" />
              </a>
              <a className="btn btn-outline-light btn-square me-2" href="#">
                <i className="bi bi-linkedin" />
              </a>
              <a className="btn btn-outline-light btn-square" href="#">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
          <div className="col-12 text-center text-body">
            <a className="text-light" href="">
              Terms &amp; Conditions
            </a>
            <span className="mx-1">|</span>
            <a className="text-light" href="">
              Privacy Policy
            </a>
            <span className="mx-1">|</span>
            <a className="text-light" href="">
              Customer Support
            </a>
            <span className="mx-1">|</span>
            <a className="text-light" href="">
              Payments
            </a>
            <span className="mx-1">|</span>
            <a className="text-light" href="">
              Help
            </a>
            <span className="mx-1">|</span>
            <a className="text-light" href="">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container-fluid bg-dark text-white-50 py-4">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">
              ©{" "}
              <a className="text-white" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Designed by{" "}
              <a className="text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> */}
    
    </footer>
    </>
  )
}

export default Footer
