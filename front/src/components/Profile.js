import React, { Component } from 'react';
import { Grid, Snackbar, Button } from '@material-ui/core';
import { Close, ExitToApp } from '@material-ui/icons';
import homer from '../assets/images/Homer.png';
import checkUser from './Private';



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false,
            flash:"",
            user:{}
         };
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount(){
        checkUser(this,this.props);
    }

    logOut(){
        localStorage.clear();
        this.props.history.push("/");
    }


    render() {
        const {user} = this.state;
        return (
            <form onSubmit={e => this.handleSubmit(e, this.state)} onChange={this.handleChange}>
                <Grid container justify="center" alignItems="center">
                    <Grid item sm={6}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <img src={homer} alt="homer" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container direction="row" justify="center" alignItems="flex-end">
                            <h2>Profile</h2>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="flex-end">
                            <h3 className="text-muted">{user.name}</h3>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="flex-end">
                            <h3 className="text-muted">{user.email}</h3>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="flex-end">
                            <h3 className="text-muted">{user.password}</h3>
                        </Grid>
                        <Grid container direction="row" justify="center">
                            <Button variant="raised" color="primary" onClick={this.logOut}>
                                Log Out
                              <ExitToApp style={{ marginLeft: "10px" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    open={this.state.open}
                    autoHideDuration={4000}
                    onClose={() => this.setState({ open: false })}
                    message={<span id="snackbar-fab-message-id">{this.state.flash}</span>}
                    action={
                        <Button color="inherit" size="small" onClick={() => this.setState({ open: false })}>
                            <Close />
                        </Button>
                    } />
            </form>
        );
    }
}

export default Profile;