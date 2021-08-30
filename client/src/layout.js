import React, { Component } from 'react';
import TopNav from './components/TopNavbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div style={{ paddingTop: '40px' }}>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Layout;