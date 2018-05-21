import React, { Component } from 'react';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            checkPassword:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
      e.preventDefault();
      console.log(JSON.stringify(this.state,null,2));
      this.setState({
          name:"",
          email:"",
          password:"",
          checkPassword:""
      });
      e.target.reset();
    }



    render() {


        return (
            <div className="col-sm-8 offset-sm-2">
              <div className="row justify-content-center">
                <h1><pre>{JSON.stringify(this.state,null,2)}</pre></h1>
              </div>
              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group">
                  <label htmlFor="inputName">Nom</label>
                  <input type="text" id="inputName" className="form-control" placeholder="Votre Nom" name="name" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="wilder@wildcodeschool.fr" name="email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Mot de Passe</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="*******" name="password" required></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputCheckPassword">Mot de Passe</label>
                  <input type="password" id="inputCheckPassword" className="form-control" placeholder="*******" name="checkPassword" required></input>
                </div>
                <div className="row justify-content-center">
                  <button className="btn btn-outline-dark">Envoyer</button>
                </div>
              </form>


            </div>
        );
    }
}

export default SignUp;
