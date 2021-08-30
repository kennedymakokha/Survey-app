import React, { Component } from 'react';

class SingleQuestion extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontSize: '20px' }}>
                            {this.props.data.body}
                        </p>
                        <span style={{ fontWeight: 'bold' }}>Option 1:</span> <p style={{ textTransform: 'capitalize', fontStyle: 'italic' }}>
                            {this.props.data.ans1.ans}
                        </p>
                        <span style={{ fontWeight: 'bold' }}> Option 2: </span><p style={{ textTransform: 'capitalize', fontStyle: 'italic' }}>
                            {this.props.data.ans2.ans}
                        </p>
                    </div>
                </div>
                <div style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', display: 'flex' }}>
                    <button className="btn-primary" >Edit</button>
                </div>
                <hr />
            </div>

        );
    }
}

export default SingleQuestion;