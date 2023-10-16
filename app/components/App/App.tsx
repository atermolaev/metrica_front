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

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Auth} />
      <Route path="/main">
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
                <Route path="/main/home" component={Home} />
                <Route path="/main/page1" component={Page1} />
                <Route path="/main/page2" component={Page2} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Route>
    </Router>
  )
}

export default App;