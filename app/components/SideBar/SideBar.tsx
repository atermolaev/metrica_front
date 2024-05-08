import React from 'react';
import classes from './SideBar.module.css'
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

const SideBar: React.FC = () => {
    return (
        <Flex className={classes.sidebar} mr={2}>
            <Grid w="100%" h="auto" gridTemplateRows="min-content">
                <GridItem
                    ml={2}
                    mr={2}
                    h="58px"
                >
                    <Logo />
                </GridItem>
                <GridItem
                    ml={2}
                    mr={2}
                >
                    <Menu />
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default SideBar