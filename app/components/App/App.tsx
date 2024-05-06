import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { 
  Header, 
  SideBar, 
  Home, 
  Page1, 
  Page2, 
  Logo, 
  Container, 
  Auth, 
  Grid 
} from '$components';
import { useCookies } from 'react-cookie';
import { COOKIE_AUTH_NAME, EMPTY } from '$constants';

const App: React.FC = () => {
  const [cookie] = useCookies();

  if (cookie[COOKIE_AUTH_NAME] === EMPTY || cookie[COOKIE_AUTH_NAME] === undefined) return <Auth />;

  return (
    <Router>
      <Route path="/">
        <Container>
          <Grid>
            <Grid>
              <Logo />
            </Grid>
            <Grid>
              <Header />
            </Grid>
            <Grid>
              <SideBar />
            </Grid>
            <Grid>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Route>
    </Router>
  )
}

export default App;