// React
import React, { Component } from 'react';

// Component


//CSS
import '../../pages/AlterarMeta/AlterarMeta.css'


export default class AlterarMeta extends Component {

  render() {
    return (
        <div>
        <div  className="container">
            <form>
                <p className="h4 text-center mb-4">Alterar Meta</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Digite a senha atual</label>
                <input type="password" id="defaultFormRegisterNameEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Digite a nova senha</label>
                <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Digite novamente a nova senha</label>
                <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
                <br />
                <div className="text-center mt-5 ">
                    <button className="btn btn-unique botaoAlterar" type="submit">Confirmar Alteração</button>
                </div>
                <br />
            </form>
        </div>
    </div>
    )
  }
}