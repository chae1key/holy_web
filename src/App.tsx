import styled from 'styled-components';
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./shared/GlobalStyles";
import RouteLayout from "./shared/RouteLayout";
import { TopMenu, Tongdok } from "./components";
import {
  Home,
  Login,
  SignUp,
  PrayBoard, CreatePray, ReadPray,
  TongdokPage,
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
            <Route path="/prayBoard" element={<PrayBoard />} />
            <Route path="/createPray" element={<CreatePray />} />
            <Route path="/readPray" element={<ReadPray />} />
            <Route path="/tongdok" element={<TongdokPage/>} />
            <Route path="/tongdok/:name" element={<Tongdok/>} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes >
    </AppWrap >
  );
}

const AppWrap = styled.div`
  padding-bottom: 80px;
`;


export default App;
