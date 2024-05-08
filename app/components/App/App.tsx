import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  SideBar,
  Home,
  Page1,
  Page2,
  Container,
  Auth,
} from '$components';
import { useCookies } from 'react-cookie';
import { COOKIE_AUTH_NAME, EMPTY } from '$constants';
import { Grid, GridItem } from '@chakra-ui/react';

const App: React.FC = () => {
  const [cookie] = useCookies();

  if (cookie[COOKIE_AUTH_NAME] === EMPTY || cookie[COOKIE_AUTH_NAME] === undefined) return <Auth />;

  return (
    <Router>
      <Route path="/">
        <Container>
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={1} > 
              <SideBar />
            </GridItem>
            <GridItem colSpan={4}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
              </Switch>
            </GridItem>            
          </Grid>
        </Container>
      </Route>
    </Router>
  )
}

export default App;