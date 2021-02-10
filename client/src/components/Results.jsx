import React from 'react';
import styled from 'styled-components';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: this.props.results
        }

        this.getDayOfWeek = this.getDayOfWeek.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            results: newProps.results
        });
    }

    getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return isNaN(dayOfWeek) ? null : days[dayOfWeek];
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            results: newProps.results
        });
    }

    render() {
        var commitDates = this.state.results.map(commit => {
            return <div>{commit}</div>
        });
        return <div>{commitDates}</div>
    }
}

export default Results;