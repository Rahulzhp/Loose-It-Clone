import React from "react";
import {Grid,GridItem} from "@chakra-ui/react";
import {Link, Navigate} from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return (
  <div>
    <Grid
  templateAreas={`"header header"
                  `}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  pl='513' pt='2.5' bg='blue.300' area={'header'}>
  <Link to="/login">lose it! is hiring! Click here to see our open positions.</Link>
  </GridItem>
  
</Grid>
  </div>
  );

};

export default Navbar;
