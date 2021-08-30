import React from 'react';
import { Link } from 'react-router-dom'
const Tesla = (history) => {

    return (
        <div >
            <h1 style={{ textAlign: 'center', color: 'white' }}><span className="titleCap">T</span>exla<span className="titleCap">S</span>urveys</h1>
            <h3 style={{ textAlign: 'center', color: 'white' }}>Let the people speak</h3>
            <div className="center">
                <button className=" btn  btn-primary" >
                    <Link to="/our-surveys" style={{color:"white"}}>Take the survey</Link>
                </button>
            </div>
        </div>
    );
}


export default Tesla;