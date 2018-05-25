import React, { Component } from 'react';
import {Grid,Paper,Snackbar,Button} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import SignUp from './SignUp';





class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      open:false,
      flash:""
    }
    this.handleClose = this.handleClose.bind(this);
    this.update = this.update.bind(this);
  }
  
  handleClose(){
    this.setState({open:false})
  }


  update(ob){
    this.setState(ob)
  }

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
            <SignUp update={this.update}/>
            <Snackbar
              open={this.state.open}
              autoHideDuration={4000}
              onClose={this.handleClose}
              message={<span id="snackbar-fab-message-id">{this.state.flash}</span>}
              action={
                <Button color="inherit" size="small" onClick={this.handleClose}>
                  <Close />
              </Button>
              }/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
