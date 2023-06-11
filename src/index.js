import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeContainer from './Containers/HomeContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProjectContainer from './Containers/ProjectContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomeContainer/>}/>
    <Route path="/projects" element={<ProjectContainer/>}/>
  </Routes>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
