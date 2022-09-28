import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { Container, VStack,Box,Grid,GridItem,Image,Text, } from "@chakra-ui/react";


const getdata=()=>{
  return axios.get("https://fakestoreapi.com//products");
}

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

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
