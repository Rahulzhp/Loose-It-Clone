import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { Container, VStack,Box,Grid,GridItem,Image,Text, } from "@chakra-ui/react";


const getdata=()=>{
  return axios.get("https://fakestoreapi.com//products");
}

const Home = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    getdata().then((res)=> setData(res.data));
  },[])
  console.log(data)
  return (
    <Container maxW={{base:"full", md:"Container.xl"}} p={{base:2,lg:0}}>
      <Grid w="full" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={4}>
        {data&& data.map((product)=>(<GridItem key={product.id}><Box bg="red.50" columns ={{sm:2,md:4}} spacing="8"> <VStack> <Box><Image boxSize="xs" src={product.image} alt="pro-img"/></Box> <Box> <Text>{product.title}</Text></Box> <Box> <Text>INR = {product.price}</Text></Box></VStack></Box></GridItem>))}
      </Grid>

    </Container>
  
  )
};

export default Home;
