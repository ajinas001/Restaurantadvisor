import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Navbar from '../../../components/home/navbar/Navbar'
import Footer from '../../../components/home/footer/Footer'
function Randhal() {
  
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
       <Navbar/>
        
       <Footer/>
        </div>
      </div>
    </>
  )
}

export default Randhal
