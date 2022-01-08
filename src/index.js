import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import FirebaseContext from './context/firebase';
import {Firebase, FieldValue} from './lib/firebase';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render( 

    <FirebaseContext.Provider  value={{Firebase, FieldValue}}>
        <App />
    </FirebaseContext.Provider>,
     document.getElementById('root') 
    
);

