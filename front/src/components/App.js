import React, { Component } from 'react';
import {Grid,Paper} from '@material-ui/core';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';



//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {


  render() {


    return (
      <Grid container
        alignItems='center'
        style={{ height: '100%' }}>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            style={{ margin: 32 }}
          >
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signin" component={SignIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/profile" component={Profile}/>
            </Switch>
          </BrowserRouter>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
