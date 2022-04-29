import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import GlobalContext from '../context/GlobalContext';
import Header from './Header/Header';
import Hotels from './Hotels/Hotels';
import Detail from './Detail/Detail';
import Form from './Form/Form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <GlobalContext>
      <Routes>
          <Route path='/' element={<Hotels />} />
          <Route path='/hotel/:id/new' element={<Form />} />
          <Route path='/hotel/:id' element={<Detail />} />
          </Routes>
      </GlobalContext>
    </AppWrapper>
  </>
);

export default App;
