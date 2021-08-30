import React, { Component } from 'react';
import Layout from '../layout';
import { connect } from 'react-redux'
import { getresponseDetail } from './../redux/actions/response'
import { withRouter } from 'react-router-dom';

class ResponseDetail extends Component {
    state = {
        ans1: 0,
        sum: 0,
        ans2: 0

    }

    componentDidMount = async () => {
        const { state } = this.props.location
        console.log(state)
        const k = await this.props.getresponseDetail(`${state.id}`)
        console.log('k')
        console.log(k.data)
        this.setState({
            ans1: k.data.count1,
            ans2: k.data.count2,
            sum: k.data.count1 + k.data.count2
        })

    }
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">

                            {this.state.ans1}

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Question</th>
                                        <th scope="col">Option 1 Count</th>
                                        <th scope="col">Option 2 Count</th>
                                        <th scope="col">Total Number of participants</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{this.state.ans1}</td>
                                        <td>{this.state.ans2}</td>
                                        <td>{this.state.sum}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </Layout>

        );
    }
}

const mapStateToProps = (state) => {
    return {

    }

};

export default connect(mapStateToProps, { getresponseDetail })(withRouter(ResponseDetail));
