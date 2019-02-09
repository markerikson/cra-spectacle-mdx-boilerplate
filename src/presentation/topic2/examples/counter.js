import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0
    };

    incrementCount = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.incrementCount}>
                    Click Me
                </button>
            </div>
        )
    }
}