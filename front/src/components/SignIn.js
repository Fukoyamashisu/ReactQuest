import React, { Component } from 'react';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import { AccountCircle, Send, Close } from '@material-ui/icons';
import homer from '../assets/images/Homer.png';
import {Link} from 'react-router-dom';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            flash: "",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendUser = this.sendUser.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state){
            const { open, flash, user } = this.props.location.state;
            this.setState({ open, flash, user });
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e, data) {
        e.preventDefault();
        this.sendUser(data)
        e.target.reset();
    }

    sendUser(data) {
        fetch("/auth/signin", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res =>  res.json())
            .then(res => {
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', res.user);
                this.props.history.push("/profile");
            }, err => this.update({ flash: err.flash, open: true }))
    }

    update(ob) {
        this.setState(ob)
    }


    render() {

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
                        <Grid item sm={12}>
                            <Grid container direction="row" justify="center" alignItems="flex-end">
                                <h2>Sign In</h2>
                            </Grid>
                        </Grid>
                        <Grid item sm={12}>
                            <Grid container direction="row" justify="center" alignItems="flex-end">
                                <AccountCircle />
                                <TextField label="Email" name="email" style={{ width: "80%" }} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12}>
                            <Grid container direction="row" justify="center" alignItems="flex-end">
                                <AccountCircle />
                                <TextField label="Password" name="password" style={{ width: "80%" }} />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} style={{ margin: "20px 0" }}>
                            <Grid container direction="row" justify="center">
                                <Button type="submit" variant="raised" color="primary">
                                    Send
                            <Send style={{ marginLeft: "10px" }} />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Link to='/signup'>Sign Up</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    open={this.state.open}
                    autoHideDuration={4000}
                    onClose={() => this.update({ open: false })}
                    message={<span id="snackbar-fab-message-id">{this.state.flash}</span>}
                    action={
                        <Button color="inherit" size="small" onClick={() => this.update({open:false})}>
                            <Close />
                        </Button>
                    } />
           </form>
        )
    }
}

export default SignIn;