import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();


        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const user = result.user;
                const {displayName, email} = user;
                const signInUser = {displayName, email};
                // console.log("Sign form log",signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    }
    return (
        <div>
            <button onClick={handleGoogleSingIn}>Google Sign in</button>
        </div>
    );
};

export default Login;