import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, VStack, Box, Grid, GridItem, Image, Text, Flex, Spacer, Button,inherit } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <div  style={{
      backgroundImage: "linear-gradient(white,#F5801E)",
      color: "darkred",
      height:"875px"
    }}>
      <Flex>
        <Box marginLeft={30} >
          <Image boxSize='190px' src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg" alt="lo" />
        </Box>
        <Spacer />
        <Box marginTop={70} marginRight={49}>
          <Button color="white" bg="#F5801E"><Link to="/login">Login</Link></Button>
        </Box>
      </Flex>
      <Container maxW='100%'  bg='' >
        <Flex>
          <Box boxSize='sm' marginLeft="205px">
            <Image boxSize='650px' src='https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png' alt='Dan Abramov' />
          </Box>
          <Spacer />
          <Box marginRight={235} marginTop="55px">
            <Text fontSize={40} fontWeight="900" fontFamily="inherit" color="#455555">Top Rated <br></br>Weight Loss Plan </Text>
            <Text fontFamily= "inherit" color="#455555" fontSize={23} marginTop="15px">Track The foods you Love and Lose Weight </Text>
            <Button color="white" bg="#183962" letterSpacing={1.5} paddingTop="7" paddingBottom={7} padding="30px" marginTop={29}><Link to="/login">Sign up for Free</Link></Button>
          </Box>
        </Flex>
      </Container>
      </div>
      <div style={{textAlign:"center",marginTop:"20px"}}>
        <Text color="#183962" fontFamily="inherit" fontSize={25} fontWeight="500">Weight Loss Made Easy</Text>
      </div>
    </div>
  )



};

export default Home;
