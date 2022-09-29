import { Grid, VStack,GridItem, Button, useStatStyles } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


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
