import React from 'react';
import { Link } from 'react-router-dom';

import './login.css'

const loginModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modaly">
            <div className="modaly-content">

                <div className="modaly-body">
                    <div className="register-container" style={{ backgroundColor: 'white' }}>
                        <h1 className="reg-title">
                            Login
                        </h1>
                        <div className="input-container-login" >
                            <i className="fa  fa-user-circle " style={{ paddingRight: '10px' }}></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="regInput"
                                onChange={(e) => props.handleChange(e)}
                            ></input>
                        </div>
                        <div className="input-container-login">
                            <i className="fa 2x fa-lock " style={{ paddingRight: '10px' }}></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                placeholderStyle={{color:'white'}}
                                required
                                className="regInput"
                                onChange={(e) => props.handleChange(e)}
                            ></input>
                        </div>

                        {props.errored ? <div className=" input-container-login warning"  style={{ justifyContent: 'center',color:'white' }}>{props.error}</div> : null}


                    </div>

                </div>
                <div className="modaly-footer">
                    <button className="btn btn-primary" onClick={props.close}>close</button>
                    <button className=" btn  btn-success" onClick={props.submit} >
                        {props.loading ? <i className="fa fa-spinner fa-spin"></i> : null} Sign In
                    </button>
                </div>
            </div>

        </div>
    );

}
export default loginModal

