import React from "react";
import { lazy, Suspense } from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';


const Login = lazy( () => import('./pages/login'));


// import react from "react";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
        </Routes>
      </Suspense> 
    </Router>
  );
}

export default App;
