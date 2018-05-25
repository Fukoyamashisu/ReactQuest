import React, { Component } from 'react';
import { Grid,TextField,Button} from '@material-ui/core';
import {AccountCircle,Send} from '@material-ui/icons';
import homer from '../assets/images/Homer.png';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            checkPassword:"",
            data:"",
            flash:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendUser = this.sendUser.bind(this);
    }

    componentDidMount(){
      this.callApi()
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err));
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
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.setState({
          name:"",
          email:"",
          password:"",
          checkPassword:""
      });
      this.sendUser(data)
      e.target.reset();
    }

    sendUser(data){
      fetch("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(res  =>  this.setState({"flash":  res.flash}), err  =>  this.setState({"flash":  err.flash}))
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
              <Grid item sm={12 }>
                <Grid container direction="row" justify="center">
                  <h3 className="alert-danger">{flash.length > 0 && flash}</h3>
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
            </Grid>
          </Grid>
          </form>

        );
    }
}

export default SignUp;
