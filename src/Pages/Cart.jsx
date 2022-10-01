import React from "react";
import { Box, FormControl, FormLabel, Input,Image, Button,Text,Flex } from "@chakra-ui/react"

const Cart = () => {
  return (
    <div>
      <Image width="15%" marginLeft="553px" marginTop="25px" src="https://my.loseit.com/LoseIt_Logo_FullColor.png"></Image>
    <Box width="30%" margin="auto" marginTop="50px" textAlign="center">
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='Enter email' />
      </FormControl>
      <br></br>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Enter Password' />
      </FormControl>
      <Button bg="#F5801E" color="white" paddingTop="17px" paddingBottom={17} paddingLeft="183px" paddingRight={183} marginTop="20px">Log In</Button>
      <Text fontFamily="Avenir" color="#F5801E" marginTop={15}>Forgot Your Password?</Text>
      <Flex fontFamily="Avenir" fontSize="17px" marginLeft="59px">
      <Text>Don't have an account?</Text>
      <Text color="#F5801E">Create one Now!</Text>
      </Flex>
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop:"10px"}}>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>OR</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
      <Button bg="black" color="white" marginTop={4}><Image width="10%" src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg"></Image>Sign in with Apple</Button>
      <Text marginTop="16px" fontFamily="Avenir" fontSize="16px">Sign In with Facebook is no longer supported</Text>
      <Text marginTop="-2px" fontFamily="Avenir" fontSize="16px" color="#F5801E">Create a new password now!</Text>
    </Box>
    <Box border="solid 2.5px #F3F4F6" height={200} marginTop="10px" textAlign="center">
      <Text marginTop={75} fontFamily="Avenir" color="#6B7280">© Copyright 2008-2022 FitNow, Inc. All Rights Reserved</Text>
      <Text color="#3B82F6" fontWeight="600">Privacy | Terms of Service</Text>
    </Box>
    
   </div>

  );
};

export default Cart;
