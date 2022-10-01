import React from "react";
import { Container, Box, Image, Text, Flex, Spacer, Button} from "@chakra-ui/react";
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
          <Button color="white" bg="#F5801E" letterSpacing={1.5}><Link to="/cart">Login</Link></Button>
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
            <Image boxSize="35%" marginTop={15} src="https://assets.loseit.com/website/home/Download_Apple.svg"></Image>
            <Image boxSize="35%" marginTop={-35}src="https://assets.loseit.com/website/home/Download_GooglePlay.svg"></Image>
          </Box>
        </Flex>
      </Container>
      </div>
      <div style={{textAlign:"center",marginTop:"23px"}}>
        <Text color="#183962" fontFamily="inherit" fontSize={25} fontWeight="500">Weight Loss Made Easy</Text>
      </div>
      <Flex width="80%" margin="auto" marginTop="25px">
        <Box  width="33.3%" height={250} textAlign="center">
          <Text color="#ff9400" fontWeight="500" fontSize="1.5em">Set Your Goals</Text>
          <Image boxSize="50%" marginLeft="25%" marginTop={15} src="https://assets.loseit.com/website/home/Home_SetGoal.svg"></Image>
          <Text color="#808284" fontWeight="400" fontSize="1.1em" marginTop={5}>Tell us what you want to acheive <br></br>and receive personalized goals.</Text>
        </Box>
        <Box  width="33.3%" height={250} textAlign="center">
          <Text color="#ff9400" fontWeight="500" fontSize="1.5em">Track Your Food</Text>
          <Image boxSize="50%" marginLeft="25%" marginTop={15} src="https://assets.loseit.com/website/home/Home_TrackFoods.svg"></Image>
          <Text color="#808284" fontWeight="400" fontSize="1.1em" marginTop={5}>Learn about the foods you’re eating <br></br> and keep your calories within your daily budget.</Text>
        </Box>
        <Box width="33.3%" height={250} textAlign="center">
          <Text color="#ff9400" fontWeight="500" fontSize="1.5em">Loose Wieght</Text>
          <Image boxSize="50%" marginLeft="25%" marginTop={15} src="https://assets.loseit.com/website/home/Home_LoseWeight.svg"></Image>
          <Text color="#808284" fontWeight="400" fontSize="1.1em" marginTop={5}>Reach your goals and continue to set <br></br> new ones for a happier, healthier you!</Text>
        </Box>
      </Flex>
      <Box bg="#183962" textAlign="center" height="625px" marginTop={35}>
      <Text paddingTop="20px" color="#fff" fontSize="2em" fontWeight="500" >Advice from Successful Members</Text>
      <Flex paddingTop={5} width="80%"  margin="auto">
        <Box width="50%" >
          <Image width="50%" marginLeft="25%" src="https://assets.loseit.com/website/home/Advice_Carla.png"></Image>
          <Text color="#ffa600" fontWeight="500" fontSize="1.1em" marginTop={5}>Track every single bite you take. You need to know <br></br> how you’re doing before dinner. If you don’t, things <br></br> can  get away from you fast."</Text>
          <Text color="#fff" fontWeight="400" fontSize=".8em" marginTop={3}  >- Carla, 65 lbs lost without giving up pizza.</Text>
        </Box>
        <Box width="50%" >
        <Image width="50%" marginLeft="25%" src="https://assets.loseit.com/website/home/Advice_Alex.png"></Image>
          <Text color="#ffa600" fontWeight="500" fontSize="1.1em" marginTop={5}>Everyday is a battle, and you have to make <br></br>  the choice each morning to fight for your <br></br>health and wellness"</Text>
          <Text color="#fff" fontWeight="400" fontSize=".8em" marginTop={3}  >- Alex, lost 85 lbs for his wedding.</Text>
        </Box>
      </Flex>
      <Button letterSpacing={1.5} bg="#F5801E" color="white" padding={25} marginTop={50}>Share Your Story</Button>
      </Box>
      <Box bg="#f1f1f1" textAlign="center" height="625px">
        <Image width="35%" marginLeft={450} src="https://assets.loseit.com/website/home/Ticker_Celebratory.svg"></Image>
        <Text bg="#f1f1f1" color="#ff9400" fontWeight="700" fontSize="6.8em" marginTop={3} >124,234,560</Text>
        <Text bg="#f1f1f1" color="#455555" fontWeight="700" fontSize="2em" letterSpacing=".4em">POUNDS LOST</Text>
        <Text  color="#183962" fontWeight="500" fontSize="1.5em" letterSpacing=".2em" marginTop={50}> <u>AS SEEN ON </u></Text>
        <Flex  height="auto" width="90%" margin="auto" marginTop={30}>
          <Box  width="25%">
            <Image width="65%" marginLeft="13%" marginTop="7%" src="https://assets.loseit.com/website/home/Feature_TodayShow.png"></Image>
          </Box>
          <Box  width="25%">
          <Image width="63%" marginLeft="13%" src="https://assets.loseit.com/website/home/Feature_People.png"></Image>
          </Box>
          <Box   width="25%">
          <Image width="63%" marginLeft="13%" src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png"></Image>
          </Box>
          <Box   width="25%">
          <Image width="65%" marginLeft="13%" marginTop="7%" src="https://assets.loseit.com/website/home/Feature_WomensHealth.png"></Image>
          </Box>
        </Flex>
      </Box>
      <Flex bg="#183962" color="#fff"  height="281px"  marginTop="350px">
          <Box  width="32%">
            <Image width="33%" marginLeft="160px" marginTop="110px" src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg"></Image>
          </Box>
          <Box  marginTop="110px" width="57%">
            <Flex >
              <Box  width="33.3%" >
                <Text fontWeight="700" fontSize="21px" >Member Resourses</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">How it Works</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Premium</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Lose It! Blog</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Help Center</Text>
              </Box>
              <Box  width="33.3%">
              <Text fontWeight="700" fontSize="21px" letterSpacing="1px" >Connect With Us</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Press & Media kit</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Share your Story</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Partners & API</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Contact Us</Text>
              </Box>
              <Box  width="33.3%">
              <Text fontWeight="700" fontSize="21px" letterSpacing="1px" >Our Team</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">About Us</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Careers</Text>
                <Text fontWeight="400" fontSize="18px" lineHeight="22px">Diversity</Text>
              </Box>
            </Flex>
          </Box>
          <Box  width="13%"></Box>
      </Flex >
      <Flex bg="#183962"  height="90px" color="#fff" textAlign="center">
        <Box width="30%"></Box>
        <Box  width="40%">
          <Text fontSize="15px">Copyright 2008-2021 FitNow, Inc, <br></br> All Rights Reserved
Privacy | Terms of Service</Text>
        </Box>
        <Box  width="30%">
          <Image width="13%" marginLeft="350px" marginTop="32px" src="https://cdn.userway.org/widgetapp/images/body_wh.svg"></Image>
        </Box>
      </Flex>
      
    </div>
  )



};

export default Home;
