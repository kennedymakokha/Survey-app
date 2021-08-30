import React from 'react';


const AddQuestion = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modaly">
            <div className="modaly-content" style={{ width: '800px', height: 'auto' }}>

                <div className="modaly-body">
                    <div className="register-container" style={{ backgroundColor: 'white' }}>

                        <div className="input-container-login" style={{height:'100px'}} >

                            <textarea
                                type="text"
                                name="body"
                                placeholder="Question"
                                required
                                className="regInput"
                                onChange={(e) => props.handleChange(e)}
                            />
                        </div>
                        <div className="input-container-login" style={{height:'100px'}}>

                            <textarea
                                type="text"
                                id="password"
                                name="ans1"
                                placeholder="First option"
                                placeholderStyle={{ color: 'white' }}
                                required
                                className="regInput"
                                onChange={(e) => props.handleChange(e)}
                            />
                        </div>

                        <div className="input-container-login" style={{height:'100px'}}>

                            <textarea
                                type="text"
                                id="password"
                                name="ans2"
                                placeholder="Second Option"
                                placeholderStyle={{ color: 'white' }}
                                required
                                className="regInput"
                                onChange={(e) => props.handleChange(e)}
                            />
                        </div>

                        {props.errored ? <div className=" input-container-login warning" style={{ justifyContent: 'center', color: 'white' }}>{props.error}</div> : null}


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
export default AddQuestion

