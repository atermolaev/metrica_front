import React from 'react';
import classes from './Logo.module.css';
import { Flex } from '@chakra-ui/react';
 
const Logo: React.FC = () => {
    return (
        <Flex 
            className={classes.logo} 
            justifyContent="space-around" 
            pt={4} 
            pb={4}
        >
            MetricaOnline
        </Flex>
    )
}

export default Logo;