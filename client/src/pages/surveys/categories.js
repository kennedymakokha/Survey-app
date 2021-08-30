import React, { Component } from 'react';
import SurveyComponent from '../../components/surveycomponent';
import Layout from '../../layout';
import { connect } from 'react-redux'
import { getCategories } from './../../redux/actions/categories'
import { withRouter } from 'react-router-dom';
class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
          

        }
    }

    componentDidMount = async () => {
        await this.props.getCategories()
    }
    render() {
        return (
            <Layout>
                <div style={{ paddingTop: '100px' }}>
                    {this.props.categories.map((sur, i) => (
                        <SurveyComponent data={sur} />
                    ))}


                </div>

            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.userRegister.error,
        loading: state.userRegister.loading,
        categories: state.categoryData.categories,
    }

};

export default connect(mapStateToProps, { getCategories })(withRouter(Survey));

