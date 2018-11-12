// React
import React, { Component } from 'react'

// CSS
import '../../pages/Register/Register.css';

export default class Sobre extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            sexo: ''
        }   

    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value})
    }
    onSexoChange = (event) => {
        this.setState({ sexo: event.target.value})
    }
    onSubmitRegister = () => {
        fetch('http://localhost:3001/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                sexo: this.state.sexo
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user){
                    console.log('REGISTROU')
                    //MUDAR A ROTA, PORQUE USUARIO REGISTROUU
                }                
            })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="container-fluid container-login">
                    <form>
                        <p className="h4 text-center regTitle mb-4">Cadastrar</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Your name</label>
                        <input 
                            type="text" 
                            id="defaultFormRegisterNameEx" 
                            className="form-control" 
                            onChange={this.onNameChange}
                            />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your email</label>
                        <input 
                            type="email" 
                            id="defaultFormRegisterEmailEx" 
                            className="form-control"
                            onChange={this.onEmailChange}
                            />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Your password</label>
                        <input 
                            type="password" 
                            id="defaultFormRegisterPasswordEx" 
                            className="form-control" 
                            onChange={this.onPasswordChange}
                            />
                        <div className="text-center mt-5 recuoBotao">
                            <button 
                                className="btn btn-unique buttonRegister" 
                                type="submit"
                                onClick={this.onSubmitRegister}
                            >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}