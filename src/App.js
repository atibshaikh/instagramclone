
import React from "react";
import { lazy, Suspense } from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";


const Login = lazy( () => import('./pages/login'));
const Signup = lazy( () => import('./pages/signup'));
const Dashboard = lazy( () => import('./pages/dashboard'));

const NotFound = lazy( () => import('./pages/not-found'));

// import react from "react";

function App() {

  const {user} = useAuthListener();

  return (
    <UserContext.Provider value={{user}} >
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
            <Route path={ROUTES.SIGN_UP} element={<Signup/>}></Route>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}></Route>

            <Route path="*" element={<NotFound />}></Route>


          </Routes>
        </Suspense> 
      </Router>
    </UserContext.Provider>
  );
}

export default App;
