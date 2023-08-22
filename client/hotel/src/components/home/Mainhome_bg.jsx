import React from 'react'
import './Mainhome_bg.css'
function Mainhome_bg() {
    return (
        <>
            <div className="container-fluid">
                <div className="content">
                    <div className="square twitch" style={{ marginBottom: 50 }}>
                        <span className="one" />
                        <span className="two" />
                        <span className="three" />
                        <div className="circle">
                            <h2 className="DrugRadar">Restaurent Adviser</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                        </div>
                    </div>
                    <a href="{{route('dashboard.index')}}" className="button" target="_parent">
                        <span className="actual-text">&nbsp;Dashboard&nbsp;</span>
                        <span className="hover-text" aria-hidden="true">
                            &nbsp;Dashboard&nbsp;
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Mainhome_bg