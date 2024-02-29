import React from 'react'
import './loginsamp.css'

function Loginsamp() {


    return (
        <>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form>
                            <h2 className='loginbtn'>Login</h2>
                            <div className="inputbox">
                                {" "}
                                <ion-icon name="mail-outline" /> <input type="email" required=""
                                 />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                {" "}
                                <ion-icon name="lock-closed-outline" />{" "}
                                <input type="password" required="" /> <label>Password</label>{" "}
                            </div>
                            <div className="forget">
                                {" "}
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>{" "}
                                <a href="#">Forgot Password</a>{" "}
                            </div>{" "}
                            <button>Log In</button>
                            <div className="register">
                                <p>
                                    Don't have an account? <a href="#">Sign Up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    )
}

export default Loginsamp
