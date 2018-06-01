import React, { Component } from 'react';
import { Grid,TextField,Button,Snackbar} from '@material-ui/core';
import {AccountCircle,Send,Close} from '@material-ui/icons';
import homer from '../assets/images/Homer.png';
import {Link} from 'react-router-dom';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            checkPassword:"",
            data:"",
            flash:"",
            open:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendUser = this.sendUser.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.update = this.update.bind(this);
    }

    handleClose(){
      this.setState({ open: false })
    }


    componentDidMount(){
      
    }

    callApi = async () => {
      const response = await fetch('/auth');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e ,data){
      e.preventDefault();
      this.setState({
          name:"",
          email:"",
          password:"",
          checkPassword:""
      });
      this.sendUser(data)
      e.target.reset();
    }

    sendUser(data) {
      fetch("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.status !== 200) {
            this.setState({ flash: res.flash, open: true });
            return;
          }
          this.props.history.push("/", { flash: res.flash, open: true });
        }, err => this.update({ flash: err.flash, open: true }))
    }


    update(ob) {
      this.setState(ob)
    }



    render() {

      const {data, flash, ...form }= this.state;
        return (
          <form onSubmit={e => this.handleSubmit(e,form)} onChange={this.handleChange}>
          <Grid container justify="center" alignItems="center">
            <Grid item sm={6}>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  <img src={homer} alt="homer" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6}>
                <Grid item sm={12}>
                  <Grid container direction="row" justify="center" alignItems="flex-end">
                    <h2>Sign Up</h2>
                  </Grid>
                </Grid>
              <Grid item sm={12}>
                  <Grid container direction="row" justify="center" alignItems="flex-end">
                  <AccountCircle />
                  <TextField label="Name" name="name" style={{width:"80%"}}/>
                </Grid>
              </Grid>
              <Grid item sm={12}>
                  <Grid container direction="row" justify="center" alignItems="flex-end">
                  <AccountCircle />
                  <TextField label="Email"  name="email" style={{ width: "80%" }} />
                </Grid>
              </Grid>
              <Grid item sm={12}>
                  <Grid container direction="row" justify="center" alignItems="flex-end">
                    <AccountCircle />
                    <TextField label="Password" name="password" style={{ width: "80%" }} />
                </Grid>
              </Grid>
                <Grid item sm={12}>
                  <Grid container direction="row" justify="center" alignItems="flex-end">
                  <AccountCircle />
                  <TextField label="Confirm password" name="checkPassword" style={{ width: "80%" }}/>
                </Grid>
              </Grid>
              <Grid item sm={12} style={{margin:"20px 0"}}>
                <Grid container direction="row" justify="center">
                  <Button type="submit" variant="raised" color="primary">
                    Send
                  <Send style={{marginLeft:"10px"}}/>
                  </Button>
                </Grid>
              </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Link to='/signin'>Sign In</Link>
                </Grid>
            </Grid>
          </Grid>
            <Snackbar
              open={this.state.open}
              autoHideDuration={4000}
              onClose={() => this.update({open:false})}
              message={<span id="snackbar-fab-message-id">{this.state.flash}</span>}
              action={
                <Button color="inherit" size="small" onClick={() => this.update({ open: false })}>
                  <Close />
                </Button>
              } />
          </form>

        );
    }
}

export default SignUp;
