// React
import React, { Component } from 'react';

// Component


//CSS
import '../../pages/AdicionarAlimento/AdicionarAlimento.css'


export default class AdicionarAlimento extends Component {

  render() {
    return (
        <div>
            <div className="container">
                <form>
                    <p className="h4 text-center mb-4">Criar alimento</p>
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Nome do alimento:</label>
                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Qtd carboidratos:</label>
                    <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Qtd proteínas:</label>
                    <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Qtd gorduras:</label>
                    <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
                    <br />
                    <div className="text-center mt-5 ">
                        <button className="btn btn-unique botaoAlterar" type="submit">AdicionarAlimento</button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
  }
}