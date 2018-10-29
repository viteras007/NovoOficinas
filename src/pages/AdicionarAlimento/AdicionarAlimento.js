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
                    <label htmlFor="nomeAlimento" className="grey-text">Nome do alimento:</label>
                    <input type="text" id="nomeAlimento" className="form-control" />
                    <br />
                    <label htmlFor="qtdCarbo" className="grey-text">Qtd carboidratos:</label>
                    <input type="text" id="qtdCarbo" className="form-control" />
                    <br />
                    <label htmlFor="qtdProteina" className="grey-text">Qtd proteínas:</label>
                    <input type="text" id="qtdProteina" className="form-control" />
                    <br />
                    <label htmlFor="qtdGordura" className="grey-text">Qtd gorduras:</label>
                    <input type="text" id="qtdGordura" className="form-control" />
                    <br />
                    <label htmlFor="linkImg" className="grey-text">link da imagem do alimento:</label>
                    <input type="text" id="linkImg" className="form-control" />
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