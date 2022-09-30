import {FormControl, Form,FormLabel,Input,Box, Divider} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  
  return (
    <Box width="40%" margin="auto">
      <FormControl isRequired>
  <FormLabel>Email</FormLabel>
  <Input placeholder='Enter email address' />
</FormControl>
<FormControl isRequired>
  <FormLabel>Password</FormLabel>
  <Input placeholder='Enter Password' />
</FormControl>
    </Box>
  );
};

export default Login;
