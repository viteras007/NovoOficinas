// React
import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";

// Component


//CSS
import '../../pages/AlterarSenha/AlterarSenha.css'


export default class AlterarSenha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldpass: '',
            repnewpass: '',
            newpass: ''
        }        
        this.mostrarUser();
    }
    mostrarUser = () => {
        let usuario = JSON.parse(sessionStorage.getItem('user')); 
        console.log("Session Storage: "+usuario.name);
        console.log("Session Storage LOGADO: "+sessionStorage.getItem('logado'));
    }
    //JSON.parse(sessionStorage.getItem('user')).name
    onSubmitPass = () => {
        if(this.state.oldpass === JSON.parse(sessionStorage.getItem('user')).password && this.state.newpass === this.state.repnewpass){
            fetch('http://localhost:3001/changepasswd', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: JSON.parse(sessionStorage.getItem('user')).Id,
                    password: this.state.newpass
                })
            })
                .then(response => response.json())
                .then(alert('ALTERADO COM SUCESSO'))
        }   
             
    }

    render() {
        return (
            <div>
                <div className="container containerprincipal conteudo">
                    <form>
                        <p></p>
                        <p className="h4 text-center mb-4 titulo">Alterar Senha</p>
                        <label htmlFor="senhaAtual" className="grey-text">Digite a senha atual</label>
                        <input
                            type="password"
                            id="senhaAtual"
                            className="form-control"
                            onChange={(event) => { this.setState({ oldpass: event.target.value }) }}
                        />
                        <br />
                        <label htmlFor="novaSenha" className="grey-text">Digite a nova senha</label>
                        <input
                            type="password"
                            id="novaSenha"
                            className="form-control"
                            onChange={(event) => { this.setState({ newpass: event.target.value }) }}
                        />
                        <br />
                        <label htmlFor="confirmacaoSenha" className="grey-text">Digite novamente a nova senha</label>
                        <input
                            type="password"
                            id="confirmacaoSenha"
                            className="form-control"
                            onChange={(event) => { this.setState({ repnewpass: event.target.value }) }}
                        />
                        <br />
                        <div className="text-center mt-5 ">                        
                        <Link to="/">
                            <button
                                className="btn btn-unique botaoAlterar"
                                type="submit"
                                onClick={this.onSubmitPass}

                            >
                                Confirmar Alteração
                            </button>
                            </Link>                        
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        )
    }
}