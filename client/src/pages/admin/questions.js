import React, { Component } from 'react';
import Layout from '../../layout';
import { connect } from 'react-redux'
import { getquestions, CreateQuestion } from './../../redux/actions/questions'
import { withRouter } from 'react-router-dom';
import SingleQuestion from '../../components/SingleQuestion';
import Loader from '../../components/Loader';
import AddQuestion from '../../components/addQuestion';
class Questions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            body: '',
            ans1: '',
            ans2: '',
            category: '',
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errored: false
        })

    }
    onSubmit = async () => {
        try {

            this.setState({ loading: true })
            const { body, ans1, ans2, category, } = this.state
            const data = { body, ans1, ans2, category, }
            await this.props.CreateQuestion(data)
            await this.props.getquestions(category)
            this.setState({
                show: false,
            })


        } catch (error) {
            this.setState({
                show: false,
                showRegModal: true, error: error, errored: true
            })

        }

    }
    componentDidMount = async () => {
        const { state } = this.props.location
        await this.props.getquestions(`${state.id}`)
        this.setState({ category: state.id })

    }
    render() {
        return (
            <Layout>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                        <button onClick={() => this.setState({ show: true })} className="btn btn-primary">Add Question</button>
                    </div>

                    {this.props.questions.length === 0 ? <div><h2>No Questions added</h2></div> :
                        <>
                            {this.props.loading ? <Loader /> : <>
                                {this.props.questions.map((q, i) => (
                                    <SingleQuestion key={i} data={q} />
                                ))}
                            </>}
                        </>}

                    <AddQuestion
                        show={this.state.show}
                        handleChange={(e) => this.handleChange(e)}
                        close={() => this.setState({ show: false })}
                        submit={() => this.onSubmit()}
                    />
                </div>

            </Layout>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.questionData.error,
        loading: state.questionData.loading,
        questions: state.questionData.questions,
    }

};

export default connect(mapStateToProps, { getquestions, CreateQuestion })(withRouter(Questions));
