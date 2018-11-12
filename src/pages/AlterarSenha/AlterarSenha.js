// React
import React, { Component } from 'react';

// Component


//CSS
import '../../pages/AlterarSenha/AlterarSenha.css'


export default class AlterarSenha extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldpass: '',
            repnewpass: '',
            newpass: ''
        }  
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        console.log(usuario.Id)
    }

    
    onSubmitPass = () => {                
        //alert(this.usuario.Id + "/" + this.state.newpass) 
/*
        

            fetch('http://localhost:3001/changepasswd',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.usuario.Id,
                    password: this.state.newpass                    
                })
            })
            .then(response => response.json())
            .then(alert('ALTERADO COM SUCESSO'))
        */
    }
  render() {
    return (
        <div>
        <div  className="conteudo container containerprincipal">
            <form>
                <p className="h4 text-center mb-4 titulo">Alterar Senha</p>
                <label htmlFor="senhaAtual" className="grey-text">Digite a senha atual</label>
                <input 
                    type="password" 
                    id="senhaAtual" 
                    className="form-control"
                    onChange={(event) => {this.setState({oldpass: event.target.value})}}
                />
                <br />
                <label htmlFor="novaSenha" className="grey-text">Digite a nova senha</label>
                <input
                    type="password" 
                    id="novaSenha" 
                    className="form-control"
                    onChange={(event) => {this.setState({newpass: event.target.value})}}
                />
                <br />
                <label htmlFor="confirmacaoSenha" className="grey-text">Digite novamente a nova senha</label>
                <input 
                    type="password" 
                    id="confirmacaoSenha" 
                    className="form-control" 
                    onChange={(event) => {this.setState({repnewpass: event.target.value})}}
                />
                <br />
                <div className="text-center mt-5 ">
                        <button 
                            className="btn btn-unique botaoAlterar" 
                            type="submit" 
                            onChange={}
                            >
                            Confirmar Alteração
                        </button>
                </div>
                <br />
            </form>
        </div>
    </div>
    )
  }
}