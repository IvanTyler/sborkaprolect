import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Wrapper } from './Components/Wrapper/Wrapper';
import './normalize.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
