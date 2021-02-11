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
                <Header>
                    <Title>Github Weekday Commit Averages</Title>
                </Header>
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
    width: 100%;
`;

const Title = styled.h1`
    font-family: Arial;
    color: #ffffff;
    padding: 20px;
`;

const Header = styled.div`
    background-color: #242a2e;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export default App;