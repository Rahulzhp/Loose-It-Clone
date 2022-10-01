import React from "react";
import {Grid,GridItem} from "@chakra-ui/react";
import {Link, Navigate} from "react-router-dom";


const Navbar = () => {
  return (
  <div>
    <Grid
  templateAreas={`"header header"
                  `}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'0px 1fr'}
  h='50px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  pl='483' pt='2.5' bg='#85E0FF' area={'header'}>
  <Link to="/cart">lose it! is hiring! Click here to see our open positions.</Link>
  </GridItem>
  
</Grid>
  </div>
  );

};

export default Navbar;
