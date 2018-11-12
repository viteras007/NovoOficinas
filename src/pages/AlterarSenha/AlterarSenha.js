// React
import React, { Component } from 'react';

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
                <div className="container">
                    <form>
                        <p></p>
                        <p className="h4 text-center mb-4">Alterar Senha</p>
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
                            <button
                                className="btn btn-unique botaoAlterar"
                                type="submit"                                
                                onClick={this.onSubmitPass}

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