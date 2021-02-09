import React from 'react';
import styled from 'styled-components';
import Results from './Results.jsx';
import token from '../../../token.js';

class InputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            user: '',
            repo: '',
            query: ''
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleRepoChange = this.handleRepoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleUserChange(e) {
        var user = e.target.value;
        this.setState({ user });
    }

    handleRepoChange(e) {
        var repo = e.target.value;
        this.setState({ repo });
    }

    handleSubmit(e) {
        e.preventDefault();
        var usernameForm = document.getElementById('username');
        var repoForm = document.getElementById('reponame');
        var query = `${usernameForm.value}/${repoForm.value}`;
        usernameForm.value = '';
        repoForm.value = '';
        this.setState({
            query,
            user: '',
            repo: ''
        });
    }

    clear(e) {
        e.preventDefault();
        this.setState({
            query: ''
        });
    }

    render() {
        return (
            <>
                <form>
                    <label>User name:</label>
                    <input id="username" onChange={this.handleUserChange}></input><br/>
                    <label>Repository name:</label>
                    <input id="reponame" onChange={this.handleRepoChange}></input><br/>
                    <button onClick={this.handleSubmit}>Enter</button>
                    <button onClick={this.clear}>Clear</button>
                </form>
                <Results results={this.state.query}/>
            </>
        )
    }
}

export default InputForm;