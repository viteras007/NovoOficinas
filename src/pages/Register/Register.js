// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Components

import { RadioButton } from 'primereact/radiobutton';

// CSS
import '../../pages/Register/Register.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            email: '',
            password: '',
            name: '',
            weight: '',
            height: '',
            idade: '',
            sexo: '',
            nomereg: ''
        }
    }
    onIdadeChange = (event) => {
        this.setState({ idade: event.target.value })
    }

    onPesoChange = (event) => {
        this.setState({ weight: event.target.value })
    }
    onAlturaChange = (event) => {
        this.setState({ height: event.target.value })
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onSexoChange = (event) => {
        this.setState({ sexo: event.target.value })
    }

    criarDieta = (email) => {
        fetch('http://localhost:3001/buscaemail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log(user.Id)
                this.setState({ id: user.Id }, () => {
                    let val

                    if (this.state.sexo === 'F') {
                        val = (655.1 + (9.5 * this.state.weight) + (1.8 * this.state.height) - (4.7 * this.state.idade)) * 1.2;

                    }
                    if (this.state.sexo === 'M') {
                        val = (655.5 + (13.8 * this.state.weight) + (5 * this.state.height) - (6.8 * this.state.idade)) * 1.2;
                    }


                    let proteinaDieta = (0.2 * val) / 4;
                    let carboidratoDieta = (0.6 * val) / 4;
                    let gorduraDieta = (0.2 * val) / 9;

                    console.log(
                        `
                 proteina: ${proteinaDieta}
                 carbo: ${carboidratoDieta}
                 gordura: ${gorduraDieta}
                 val: ${val}
                 id: ${this.state.id}
                `)
                    console.log("a")
                    fetch('http://localhost:3001/criardieta', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            caloria: val,
                            proteina: proteinaDieta,
                            carboidrato: carboidratoDieta,
                            gordura: gorduraDieta,
                            idusuario: this.state.id
                        })
                    })
                        .then(response => response.json())
                        .then(user => {
                            console.log("Dieta criada");
                            console.log("a")
                        })
                })
            })
    }

    onSubmitRegister = () => {
        console.log(
            `
     name: ${this.state.name}
     email: ${this.state.email}
     password: ${this.state.password}
     sexo: ${this.state.sexo}
     weight: ${this.state.weight}
     height: ${this.state.height}
     idade: ${this.state.idade}
    `)
        console.log("A")

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                sexo: this.state.sexo,
                weight: this.state.weight,
                height: this.state.height,
                idade: this.state.idade
            })
        })
            .then(response => response.json())
            .then(user => {
                console.log("Inserido criada");                
                this.setState({nomereg: user.name},() => {
                    this.criarDieta(this.state.email)
                })
                
            })
    }

    render() {

        return (
            <div>
                <div className="container-fluid container-login conteudo">
                    <form>
                        <p className="h4 text-center regTitle mb-4">Cadastrar</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Nome</label>
                        <input
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            onChange={this.onNameChange}
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Email</label>
                        <input
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                            onChange={this.onEmailChange}
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Senha</label>
                        <input
                            type="password"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            onChange={this.onPasswordChange}
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Peso</label>
                        <input
                            type="text"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            onChange={this.onPesoChange}
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Altura</label>
                        <input
                            type="text"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            onChange={this.onAlturaChange}
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Idade</label>
                        <input
                            type="text"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            onChange={this.onIdadeChange}
                        />
                        <br />
                        <div>
                            <label>Sexo:</label>
                            <br />
                            <RadioButton value="F" name="feminino" onChange={(e) => this.setState({ sexo: e.value })} checked={this.state.sexo === 'F'} /> <label className="labelespacamento">Feminino</label>
                            <RadioButton value="M" name="masculino" onChange={(e) => this.setState({ sexo: e.value })} checked={this.state.sexo === 'M'} /> <label>Masculino</label>
                        </div>
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
        );
    }
}