import React from 'react';
import './app.scss';
import HomePage from '../pages/home-page';
import SingleFormsPage from '../pages/single-forms';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Step1 } from "../pages/multi-pages-forms-page/step1"
import { Step2 } from "../pages/multi-pages-forms-page/step2"
import { Result } from "../pages/multi-pages-forms-page/result"
import SmartFormPage from '../pages/smart-page';

const App: React.FC = () => {
  return(
    <div className='app'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single-forms">Single Forms</Link>
            </li>
            <li>
              <Link to="/smart-form">Smart Form</Link>
            </li>
            <li>
              <Link to="/multi-page-form/step1">Multi Page Form</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-forms" element={<SingleFormsPage/>} />
          <Route path="/smart-form" element={<SmartFormPage/>}/>

          <Route path="/multi-page-form/step1" element={<Step1/>} />
          <Route path="/multi-page-form/step2" element={<Step2/>} />
          <Route path="/multi-page-form/results" element={<Result/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;