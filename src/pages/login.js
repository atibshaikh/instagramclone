import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Login(){

    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);


    return (
        <p>I am login page</p>
    );
}