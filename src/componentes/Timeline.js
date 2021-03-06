import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(){
        super();
        this.state = {fotos:[]};
    }
    
    componentDidMount(){
        fetch(`https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
        .then(res => res.json())
        .then(response => this.setState({fotos:response}))
        .catch(err => console.log(err));
    }

    render(){
        return (
        <div className="fotos container">
          {
              this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto}/>)
          }
        </div>            
        );
    }
}