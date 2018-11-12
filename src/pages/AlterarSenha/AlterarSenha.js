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
    }

    onSubmitPass = () => {                
        const { oldpass, repnewpass, newpass} = this.state;
        // SE A SENHA ANTIGA FOR IGUAL A SENHA QUE ESTÁ SALVA NO SESSION STORAGE QUANDO O USUARIO LOGA
        if(repnewpass === newpass && oldpass === sessionStorage()){

            fetch('http://localhost:3001/insertfood',{
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    Id: sessionStorage(),//PASSAR O ID NO SESSION STORAGE
                    password: newpass                    
                })
            })
            .then(response => response.json())
            .then(alert('ALTERADO COM SUCESSO'))
        }
    }
  render() {
    return (
        <div>
        <div  className="container">
            <form>
                <p className="h4 text-center mb-4">Alterar Senha</p>
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
                            onClick={this.onSubmitPass}>
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