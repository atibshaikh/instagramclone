
import React from "react";
import { lazy, Suspense } from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';


const Login = lazy( () => import('./pages/login'));
const Signup = lazy( () => import('./pages/signup'));
const NotFound = lazy( () => import('./pages/not-found'));

// import react from "react";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
          <Route path={ROUTES.SIGN_UP} element={<Signup/>}></Route>
          <Route path="*" element={<NotFound />}></Route>


        </Routes>
      </Suspense> 
    </Router>
  );
}

export default App;
