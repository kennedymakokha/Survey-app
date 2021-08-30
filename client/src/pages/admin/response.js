import React, { Component } from 'react';
import Layout from '../../layout';
import { connect } from 'react-redux'
import { getresponse } from './../../redux/actions/response'
import { Link, withRouter } from 'react-router-dom';
import ResponseDetail from '../../components/responseDetail';

class Response extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            show: false,
            question: ''
        }
    }

    open = (d) => {
        this.setState({
            show: true,
            question: d._id
        })
    }
    componentDidMount = async () => {
        const { state } = this.props.location
        await this.props.getresponse(`${state.id}`)
        this.setState({ category: state.id })

    }
    render() {

        return (
            <Layout>
                <div className="container">
                    <div style={{ padding: '20px' }}>
                        <button onClick={() => this.setState({ show: true })} style={{ float: 'right', marginBottom: '10px' }}>Add</button>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Question</th>
                                <th scope="col"></th>


                            </tr>
                        </thead>
                        <tbody>
                            {this.props.responses.map((resp, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{resp.question.body}</td>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: `/admin/survey/categories/${resp.slug}/response/responsedetail`,
                                                state: { id: resp.question._id } // your data array of objects
                                            }}
                                        >
                                            <button className="btn btn-primary" onClick={() => this.open(resp.question)}>View response  Details </button>
                                        </Link></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.responseData.error,
        loading: state.responseData.loading,
        responses: state.responseData.responses,
    }

};

export default connect(mapStateToProps, { getresponse })(withRouter(Response));

