import React from 'react';
import styled from 'styled-components';

class InputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            input: '',
            repositoryName: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleInputChange(e) {
        var input = e.target.value;
        this.setState({ input });
    }

    handleSubmit(e) {
        e.preventDefault();
        var inputForm = document.getElementById('input');
        inputForm.value = '';
        var repositoryName = this.state.input;
        this.setState({
            repositoryName,
            input: ''
        });
    }

    clear(e) {
        e.preventDefault();
        var inputForm = document.getElementById('input');
        inputForm.value = '';
        this.setState({
            repositoryName: '',
            input: ''
        });
    }

    render() {
        return (
            <form>
                <label>Enter a repository name</label>
                <input id="input" onChange={this.handleInputChange}></input>
                <button onClick={this.handleSubmit}>Enter</button>
                <button onClick={this.clear}>Clear</button>
                <div>{this.state.repositoryName}</div>
            </form>
        )
    }
}

export default InputForm;