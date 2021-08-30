import React, { Component } from 'react';
import AddCategoryModal from '../../components/Category/addCategoryModel';
import Layout from '../../layout';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getCategories, PostCategory } from './../../redux/actions/categories'
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: '',
            description: '',
            errored: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errored: false
        })
    }
    handleSubmit = async () => {
        try {
            const data = { title: this.state.title, description: this.state.description }
            await this.props.PostCategory(data)
            await this.props.getCategories()
            this.setState({ show: false })
        } catch (error) {
            this.setState({ errored: true })
        }
    }

    componentDidMount = async () => {
        await this.props.getCategories()
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
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th></th>
                                <th scope="col">Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.categories.map((category, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{category.title}</td>
                                    <td>{category.description}</td>
                                    <td><Link
                                        to={{
                                            pathname: `/admin/survey/categories/${category.slug}/questions`,
                                            state: { id: category._id } // your data array of objects
                                        }}
                                    >View</Link></td>
                                    <td><Link
                                        to={{
                                            pathname: `/admin/survey/categories/${category.slug}/response`,
                                            state: { id: category._id } // your data array of objects
                                        }}
                                    >View response</Link></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <AddCategoryModal
                    close={() => this.setState({ show: false })}
                    handleChange={(e) => this.handleChange(e)}
                    onSubmit={() => this.handleSubmit()}
                    show={this.state.show}
                    errored={this.state.errored}
                    error={this.props.error}
                />
            </Layout>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.categoryData.error,
        loading: state.categoryData.loading,
        categories: state.categoryData.categories,
    }

};

export default connect(mapStateToProps, { getCategories, PostCategory })(withRouter(Category));
