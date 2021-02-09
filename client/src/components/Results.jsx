import React from 'react';
import styled from 'styled-components';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: props.results
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            results: newProps.results
        });
    }

    render() {
        return <div>{this.state.results}</div>
    }
}

export default Results;