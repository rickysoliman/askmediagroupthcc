import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Results from './Results.jsx';
import token from '../../../token.js';

class InputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            user: '',
            repo: '',
            dates: []
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleRepoChange = this.handleRepoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filter = this.filter.bind(this);
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

        axios.get(`https://api.github.com/repos/${query}/commits`)
            .then(res => {
                var data = res.data;
                var updatedState = this.state.dates;
                for (let i = 0; i < data.length; i++) {
                    updatedState.push(data[i].commit.committer.date.slice(0, 10));
                }
                updatedState = this.filter(updatedState);
                this.setState({
                    dates: updatedState,
                    user: '',
                    repo: ''
                });
            })
            .catch(err => {
                console.log(err.stack);
            });

    }

    filter(dates) {
        if (dates.length > 0) {
            var today = new Date();
            var cutoffDate = new Date(`${today.getFullYear() - 1}-${today.getMonth() + 1}-${today.getDate()}`);
            for (let i = 0; i < dates.length; i++) {
                var commitDate = new Date(dates[i]);
                if (commitDate < cutoffDate) {
                    i === 0 ? dates = ['This repository has had no commits within the past 52 weeks.'] : dates = dates.slice(0, i);
                    break;
                }
            }
            return dates;
        }
    }

    clear(e) {
        e.preventDefault();
        this.setState({
            dates: []
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
                <Results results={this.state.dates.length > 0 ? this.state.dates : []}/>
            </>
        )
    }
}

export default InputForm;