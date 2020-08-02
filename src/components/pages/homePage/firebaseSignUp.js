import React, { useState, useEffect } from "react";
import { signup, signin } from "../helpers/auth";
import { auth } from '../../../services/firebase'

const SignIn = () => {
    useEffect(()=>{
        auth().onAuthStateChanged(userAuth => {
            console.log(userAuth.uid)
          });
    },[])
    const [ loginData, setLoginData ]= useState("Login")
    const loginHandler = () => {
        const email = "o.balogun@ymail.com";
        const password = "password"
        signin(email, password).then((res)=> {
            console.log(res)
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div> 
            <h3> Login here </h3>
            <button className="btn btn-sm btn-danger" onClick={loginHandler}> Login </button>
        </div>
    )
}

const FirebaseSignUp = () => {
  const [signInData, setsignInData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = signInData;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setsignInData({
      ...signInData,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    signup(name, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const isInvalid =
    //   passwordOne !== passwordTwo ||
    password === "" || name === "";

  return (
    <div>
      <h3> signUp </h3>
      <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          onChange={(e) => onChangeHandler(e)}
          className="form-control mb-2"
          type="email"
          placeholde="name here"
          name="name"
          value={name}
        />
        <input
          onChange={(e) => onChangeHandler(e)}
          className="form-control mb-2"
          type="password"
          placeholde="password here"
          name="password"
          value={password}
        />
        <button disabled={isInvalid} className="btn btn-sm btn-outline-danger">
          {" "}
          Submit{" "}
        </button>
      </form>
      <SignIn />
    </div>
  );
};

export default FirebaseSignUp;
