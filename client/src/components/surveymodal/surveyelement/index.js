import React, { Component } from 'react';
import './surveyelement.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Createresponse } from './../../../redux/actions/response'
class SurveyElement extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            category: '',
        };

        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange = async (event, d) => {

        this.setState({
            selectedOption: event.target.value
        });

        const data = {
            ans: event.target.value,
            question: d._id,
            category: d.category._id
        }
        console.log()
        await this.props.Createresponse(data)
        // await this.prop(event.target.value)


    }

    formSubmit(event) {
        event.preventDefault();

    }
    render() {
        const { data } = this.props
        return (
            <div className="survey-container">

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">

                        <p className="col-md-8 fs-4" style={{ textTransform: 'capitalize' }}>{data ? data.body : null}</p>
                        <hr />
                        <div className="radio">

                            <input
                                type="radio"
                                value="ans1"
                                style={{}}
                                size={500}
                                checked={this.state.selectedOption === "ans1"}
                                onChange={(e) => this.onValueChange(e, data)}
                            />
                            <label style={{ fontSize: '24px', textTransform: 'capitalize', paddingLeft: '20px' }}>
                                {data.ans1.ans}
                            </label>
                            <br />  <br /> <br />


                            <input
                                type="radio"
                                value="ans2"
                                style={{ padding: '100px' }}
                                checked={this.state.selectedOption === "ans2"}
                                onChange={(e) => this.onValueChange(e, data)}
                            />
                            <label style={{ fontSize: '24px', textTransform: 'capitalize', paddingLeft: '20px' }}>
                                {data ? data.ans2.ans : null}
                            </label>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.responseData.error,
        loading: state.responseData.loading,
        count: state.responseData.count
    }

};

export default connect(mapStateToProps, { Createresponse })(withRouter(SurveyElement));
