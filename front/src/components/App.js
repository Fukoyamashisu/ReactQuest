import React, { Component } from 'react';
import {Grid,Paper} from '@material-ui/core';
import SignUp from './SignUp';





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
            <SignUp />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
