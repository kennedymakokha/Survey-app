import React, { Component } from 'react';
import SurveyElement from '../../components/surveymodal/surveyelement';
import Layout from '../../layout';
import { connect } from 'react-redux'
import { getquestions } from './../../redux/actions/questions'
import { withRouter } from 'react-router-dom';
import Loader from '../../components/Loader';

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: []
        }
    }

    componentDidMount = async () => {

        const { state } = this.props.location
        await this.props.getquestions(`${state.id}`)



    }
    render() {


        return (
            <Layout>
                <div className="container">
                    {this.props.loading ? <Loader /> : <>
                        <h2 style={{ textAlign: 'center' }}>Thank you for taking part in {this.props.questions[0].category.title}'s survey</h2>
                        {this.props.questions.map((q, i) => (
                            <SurveyElement key={i} data={q} />
                        ))}
                    </>}
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

export default connect(mapStateToProps, { getquestions })(withRouter(index));

