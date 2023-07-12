

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { navlinks } from '@/utils/arrays';


export default function NavLinks() {
  return <Box>{navlinks.map((item)=>{
    return(
        <Link href={item.route} key={item.name}>
            {item.name}
        </Link>
    )
  })}</Box>;
}
