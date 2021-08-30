import React, { Component } from 'react';
import './home.css'
import Register from '../../components/register';
import Tesla from '../../components/tesla';
import Layout from '../../layout';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { register, login, signout } from './../../redux/actions/users'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: '',
            errored: false,
            password: '',
            password_confirm: '',
            success: false,
            phone: ''

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
            const { email, password, password_confirm, phone } = this.state
            const data = { email, password, password_confirm, phone }
            await this.props.register(data)
            this.setState({ success: true })
        } catch (error) {
            this.setState({
                error: error, errored: true
            })

        }

    }
    render() {
        const { email, password, password_confirm } = this.state
        return (
            <Layout>

                <div className="home-container">
                    <div className="rowy home">
                        <div className="home-pane-container left">
                            <div className="pane">
                                <Tesla />
                            </div>
                        </div>
                        <div className="home-pane-container">
                            <div className="pane">
                                <Register
                                    submit={() => this.onSubmit()}
                                    handleChange={(e) => this.handleChange(e)}
                                    email={email}
                                    password={password}
                                    errored={this.state.errored}
                                    error={this.state.error}
                                    password_confirm={password_confirm}
                                    loading={this.props.loading}
                                    success={this.state.success}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.userRegister.error,
        loading: state.userRegister.loading,
        userInfo: state.userRegister.userInfo,
    }

};

export default connect(mapStateToProps, { register, login, signout })(withRouter(index));
