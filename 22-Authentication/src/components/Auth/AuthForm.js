
import { useHistory } from 'react-router-dom';
import { useState, useRef, useContext  } from 'react';
import AUthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const History = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

   const authCtx = useContext(AUthContext);
   console.log(authCtx)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoding, setIsLoding] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    /// optional:::ADD validation


    setIsLoding(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAIJdJgBsdox8i_5mcQFyKHUW9gm9eyEE';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAIJdJgBsdox8i_5mcQFyKHUW9gm9eyEE'
    }

    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        setIsLoding(false);
        if (res.ok) {
          return res.json();
        }
        else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!!';
            throw new Error(errorMessage)
          });
        }
      })
        .then((data) => {
          console.log(data)
          authCtx.login(data.idToken);
          History.replace('/')
        })
        .catch((err) => {
          alert(err.message);
        })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoding && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoding && <p> sending request... </p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
