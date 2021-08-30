import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './surveyComponent.css'
import SurveyModal from './../surveymodal'
class SurveyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    render() {
        const { data } = this.props
        return (
            <div className="component-container">
                <h1 >
                    {data.title}
                </h1>
                <p>{data.description}
                </p>
                <div className="center">
                    <Link
                        to={{
                            pathname: `our-surveys/${data.slug}`,
                            state: { id: data._id } // your data array of objects
                        }}
                    >
                        <button className=" btn  btn-primary"  >
                            Proceed to survey
                        </button>
                    </Link>
                </div>
                {/* <SurveyModal show={this.state.show} /> */}
            </div >
        );
    }
}
export default SurveyComponent;