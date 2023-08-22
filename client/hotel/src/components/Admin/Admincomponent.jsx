import React from 'react'
import './Admincomp.css'

function Admincomponent() {
  return (
    <>
      <div className='container'>
        <div className='row'>
        <div className="col-lg-3">
        <div className="card" id='admin-card' style={{ width: "18rem" }}>
          <img src="/randhal.jpg" className="card-img-top images2" alt="..." id='bg-knr-img'/>
          <div className="card-body">
            <h5 className="card-title" >RANDHAL Restaurant</h5>
            {/* <p><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></p> */}
            <p className="card-text">
            <a href="/randhal" value='' >
            <button type="button" class="btn btn-success">Accept</button>
            <button type="button" id='rej-btn' class="btn btn-danger">Reject</button>
            </a></p>
            {/* <a href="" className="btn btn-warning">
              Delete
            </a> */}
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Admincomponent
