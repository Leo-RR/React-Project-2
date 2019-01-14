import React, { Component } from 'react';

export default class Login extends Component{

    envia(event){
        event.preventDefault();
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({'login': this.login.value, 'senha': this.senha.value}),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
        .then()
    }

    render(){

        return(
            <div className="login-box">
               <h1 className="header-logo">Instalura</h1>
               <form onSubmit={this.envia.bind(this)}> 
                    <input type="text" ref={input => this.login = input}/>
                    <input type="password" ref={input => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}