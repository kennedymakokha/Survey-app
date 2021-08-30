import React from 'react';
import { Link } from 'react-router-dom';
// import MessageBox from '../common/messagebox';


const AddCategoryModaly = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modaly">
            <div className="modaly-content" >

                <div className="modaly-body">
                    <div className="register-container" style={{ backgroundColor: 'white' }}>

                        <div className="input-container-login" >

                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                required
                                className="regInput"
                                onChange={props.handleChange}
                            ></input>
                        </div>
                        <div className="input-container-login">

                            <textarea
                                rows="4" cols="50"
                                name="description"

                                placeholder="Description"
                                required
                                className="regInput"
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                    {props.errored ? <div className=" input-container-login warning" style={{ justifyContent: 'center', color: 'white' }}>There is an Error in your submision</div> : null}
                </div>
                <div className="modaly-footer" style={{ marginRight: "70px" }}>
                    <button className="btn warning" onClick={props.close}>close</button>
                    <button className=" btn  btn-primary" onClick={props.onSubmit} >
                        <i className="fa fa-spinner fa-spin"></i> Add
                    </button>
                </div>
            </div>

        </div>
    );

}
export default AddCategoryModaly

