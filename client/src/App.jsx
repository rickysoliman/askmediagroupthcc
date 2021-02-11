import React from 'react';
import styled from 'styled-components';
import InputForm from './components/InputForm.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Main>
                <Title>Github Weekday Commit Averages</Title>
                <InputForm/>
            </Main>
        )
    }
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-family: Arial;
    color: #24292e;
`;

export default App;