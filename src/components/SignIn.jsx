import React, { useEffect, useState } from 'react'
import netflix from '../assets/netflixlogo.png'
import '../styles/signin.css'
import {auth} from '../firebase/firebase'
import { useHistory } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('')
    const [invalidemail, setInvalidemail] = useState(true)
    const [error, setError] = useState('')
    const history = useHistory();


    const signIn = () => {
        if (email ===''){
            setError('please enter your email')
            setInvalidemail(true)
        }
        

        if (email){
            auth.signInWithEmailAndPassword(email,"52489114")
            .then((user) => {
                console.log(user);
                history.push('/home')
            })
            .catch((error) => {
                console.log(error);
                setInvalidemail(false)
                setError(error.message)
            })
        }
        else {
            setInvalidemail(true)
            
        }
    }

    return (
        <div className="login-pannel">
            <div className="login-header">
                <img src={netflix} alt="logo"/>
                <button>login</button>
            </div>
            <div className="login-content">

                <h1>Unlimited movies, TV<br></br> series and more.</h1>
                <h5>Where you are. Cancel anytime.</h5>
                <h6>Ready to watch Netflix? Enter your email address to subscribe or reactivate your subscription.</h6>
     
                    <div className="login-form">
                        <div className="form">
                            <input type="email" className={!invalidemail ? "invalid-input":"valid-input"   } placeholder="E-mail adress" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                            <button className="login-button" onClick={signIn}>TO START {">"}</button>
                        </div>
                        <p className="email-error">{error}</p>
                    </div>
                    
                
            </div>
        </div>
    )
}

export default SignIn
