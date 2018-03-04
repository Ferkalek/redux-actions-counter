import React from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  increment2,
  decrement2,
} from './index';

class App extends React.Component {
    incHandle() {
        this.props.onIncHandle('10');
    }

    decHandle() {
        this.props.onDecHandle('20');
    }

    render() {
        // const { count } = this.props.data.reducershandleActions;
        const { count } = this.props.data.reducershandleActions2;
        return(
            <div>
                <button onClick={this.incHandle.bind(this)}>inc</button>
                <span style={{
                    display: 'inline-block',
                    width: '50px',
                    textAlign: 'center',
                    fontWeight: '700'
                }}>{count}</span>
                <button onClick={this.decHandle.bind(this)}>dec</button>
            </div>
        )
    }
}

export default connect(
    store => {
        return ({data: store})
    },
    dispatch => ({
        onIncHandle: (amount) => {
            // dispatch(increment(amount))
            dispatch(increment2(amount))
        },
        onDecHandle: (amount) => {
            // dispatch(decrement(amount))
            dispatch(decrement2(amount))
        },
    })
)(App)