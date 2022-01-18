import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';


import {doesUserExist} from '../services/firebase';


export default function SignUp(){

    const history = useNavigate();
    const {app} = useContext(FirebaseContext);
    
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (event) => {
        event.preventDefault();
        
        const usernameExists = await doesUserExist(username);

        if(!usernameExists.length){
            try{
                const createdUserResult  = await app
                      .auth()
                      .createUserWithEmailAndPassword(emailAddress,password);

                      await createdUserResult.user.updateProfile({
                          displayName:username
                      });

                    await app.firestore().collection('users').add({
                        userId: createdUserResult.user.uid,
                        username:username.toLowerCase(),
                        fullName,
                        emailAddress:emailAddress.toLowerCase(),
                        following:[],
                        dateCreated:Date.now()
                    })

                    history.push(ROUTES.DASHBOARD);
                                                 //authentication
                                                 // => Email address & Password and username

            }catch (error){
                setFullName('');
                setEmailAddress('');
                setPassword('');
                setUsername('');
                setError(error.message);


            }
        }else{
            setError("The username alreadu taken please try another username");
        }
        
    };

    useEffect(() => {
       document.title = 'Sign Up - Instagram';
    }, [])


 
    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
            <div className='flex w-3/5'>
                <img src="/images/iphone-with-profile.jpg" alt="iphone-screen"/>
            </div>
            <div className='flex flex-col w-2/5'>
                <div className='flex flex-col items-center bg-white mb-2 p-4 border border-gray-primary rounded'>
                    <h1 className='flex justify-content w-full'>
                        <img src='/images/logo.png' alt="Instagram Logo" className='mt-2 w-6/12 mb-4'/>
                    </h1>
                    {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

                    <form onSubmit={handleSignUp} method='POST'>
                        <input
                            aria-label="Enter your username"
                            type="text"
                            placeholder="Username"
                            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary mb-2 rounded"
                            onChange={({target}) => setUsername(target.value)}
                            value={username}
                        />
                          <input
                            aria-label="Enter your fullname"
                            type="text"
                            placeholder="Fullname"
                            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary mb-2 rounded"
                            onChange={({target}) => setFullName(target.value)}
                            value={fullName}
                        />
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email Address"
                            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary mb-2 rounded"
                            onChange={({target}) => setEmailAddress(target.value)}
                            value={emailAddress}

                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary mb-2 rounded"
                            onChange={({target}) => setPassword(target.value)}
                            value={password}

                        />

                        <button
                            disabled={isInvalid}
                            type='submit'
                            className={`bg-blue-medium text-white w-full h-8 rounded font-bold
                            ${isInvalid && ' opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className='flex justify-center items-center flex-col w-full rounded bg-white p-4 border border-gray-primary'>
                    <p className='text-sm'>Have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium" >  Login </Link> 
                    </p>
                
                </div>
            </div>
        </div>       
    );
}


//add to tailwind something

// bg-blue-medium -> hex value
// text-red-primary -> hex value
// text-grey-base -> hex value
// border-grey-primary -> hex value