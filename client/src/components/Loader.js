import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">

                    <p className="col-md-8 fs-4">
                        Loading
                    </p>

                </div>
            </div>


        );
    }
}

export default Loader;