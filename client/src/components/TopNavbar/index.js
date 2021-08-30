import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import './topbar.css'
import Login from './../login/index'
import { register, login, signout } from './../../redux/actions/users'
class TopNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            email: '',
            error: '',
            errored: false,
            password: '',

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errored: false
        })

    }
    onRegister = async () => {
        try {

            this.setState({ loading: true })
            const { email, password, firstname, surname, phone, password_confirm } = this.state

            const data = { email, password, firstname, surname, phone, password_confirm }
            this.setState({
                show: false,
                showRegModal: false,
            })
            await this.props.register(data)

            this.setState({
                show: false,
                showRegModal: false,
            })

        } catch (error) {
            this.setState({
                show: false,
                showRegModal: true, error: error, errored: true
            })

        }

    }
    signoutHandler = async () => {
        await this.props.signout();
        this.setState({ authenticated: false })
        await this.props.history.push('/');
    };
    onSubmit = async () => {

        try {
            this.setState({ loading: true })
            const { email, password } = this.state
            await this.props.login(email, password)
            this.setState({ show: false, authenticated: true })
            if (this.props.userInfo.isAdmin === true) {
                await this.props.history.push('/admin/dashboard');
            }
        } catch (error) {

            this.setState({ error: error, errored: true })
        }

    }
    render() {
        const { email, password } = this.state
        const { userInfo } = this.props
        console.log(userInfo)
        return (
            <header>
                <h1 className="logo" style={{ color: 'red' }}>Logo</h1>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav>
                    <ul>
                        <li>
                            <Link to="">
                                Home
                            </Link>
                        </li>
                        <li><Link to="">About </Link></li>
                        <li><Link to="">Blogs</Link></li>
                        <li><Link to="">Contact</Link></li>
                        {userInfo ? <li>
                            <Link to="/" onClick={() => this.signoutHandler()}>
                                Sign Out
                            </Link>
                        </li> : (
                            <li className="signinLinks" onClick={() => this.setState({ show: true })}>Sign In</li>
                        )}</ul>
                </nav>
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>

                <Login
                    show={this.state.show}
                    submit={() => this.onSubmit()}
                    handleChange={(e) => this.handleChange(e)}
                    register={() => this.setState({ showRegModal: true, show: false })}
                    email={email}
                    error={this.state.error}
                    loading={this.props.loading}
                    errored={this.state.errored}
                    password={password}
                    close={() => this.setState({ show: false })}
                />

            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.userSignin.error,
        loading: state.userSignin.loading,
        userInfo: state.userSignin.userInfo,
    }

};

export default connect(mapStateToProps, { register, login, signout })(withRouter(TopNav));
