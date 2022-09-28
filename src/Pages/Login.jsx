import { Grid, VStack,GridItem, Button, useStatStyles } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

 const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);
  axios({
    method:"POST",
    url:"https://reqres.in/api/login",
    data:email,password,
  })
  .then((res)=> res.json())
  
  
  
 }
  return (
    <div>
      <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input value={email} type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}></input>
        </label>
      </div>
      <div>
        <label>
          <input value={password} type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}></input>
        </label>
      </div>
      <div>
        <Button disabled={loading} type="submit">Submit</Button>
      </div>
    </form>
    </div>

  );
};

export default Login;
