import React, { Component } from 'react';
import './register.css'
const Register = (props) => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    return (
        <div className="register-container">
            <h1 className="reg-title">
                Join For Free
            </h1>
            <div className="input-container">
                <i className="fa 2x fa-user-circle " style={{ paddingRight: '10px' }}></i>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="regInput"
                    onChange={(e) => props.handleChange(e)}
                ></input>
            </div>
            <div className="input-container">
                <i className="fa 2x fa-phone-circle " style={{ paddingRight: '10px' }}></i>
                <input
                    type="text"
                    name="phone"
                    placeholder=" phone"
                    required
                    className="regInput"
                    onChange={(e) => props.handleChange(e)}
                ></input>
            </div>
            <div className="input-container">
                <i className="fa 2x fa-lock " style={{ paddingRight: '10px' }}></i>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="regInput"
                    onChange={(e) => props.handleChange(e)}
                ></input>
            </div>

            <div className="input-container">
                <i className="fa 2x fa-lock " style={{ paddingRight: '10px' }}></i>
                <input
                    type="password"
                    name="password_confirm"
                    placeholder="Confirm Password"
                    required
                    className="regInput"
                    onChange={(e) => props.handleChange(e)}
                ></input>

            </div>
            {props.errored ? <div className=" input-container-login warning" style={{ justifyContent: 'center', color: 'white' }}>{props.error}</div> : null}
            {props.success ? <div className=" input-container-login success" style={{ justifyContent: 'center', color: 'white' }}>Regestration successful</div> : null}

            <div className="button-container">
                <button  className=" btn full btn-primary" onClick={props.submit}>
                    {props.loading ? <i className="fa fa-spinner fa-spin"></i> : null} Register
                </button>
            </div>

        </div>
    );
}


export default Register;