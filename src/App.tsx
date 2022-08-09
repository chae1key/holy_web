import styled from 'styled-components';
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./shared/GlobalStyles";
import RouteLayout from "./shared/RouteLayout";
import { TopMenu } from "./components";
import {
  Home,
} from './pages'
import React from 'react';

function App() {

  const location = useLocation();

  return (

    <AppWrap className="App">
      <GlobalStyles />
      <Routes>
        <Route element={<RouteLayout />}>
          <Route element={<TopMenu />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/board" element={<PrayBoard />} /> */}
          </Route>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
        </Route>
      </Routes >
    </AppWrap >
  );
}

const AppWrap = styled.div`
  padding-bottom: 80px;
`;

export default App;
