// React
import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";

// Component


//CSS
import '../../pages/AdicionarAlimento/AdicionarAlimento.css'

export default class AdicionarAlimento extends Component {
    constructor(props){
        super(props);
        this.state = {
            Vname: '',
            Vcaloria: 0,
            Vproteina: '',
            Vcarboidrato: '',
            Vgordura: '',
            Vimglink: ''
        }  
    }
    onSubmitFood = () => {                
        fetch('http://localhost:3001/insertfood',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.Vname,
                caloria: this.state.Vcaloria,
                proteina: this.state.Vproteina,
                carboidrato: this.state.Vcarboidrato,
                gordura: this.state.Vgordura,
                imglink: this.state.Vimglink
            })
        })
        .then(response => response.json())
        .then(food => {            
            alert('INSERIDO COM SUCESSO')
        })

        
    }

  render() {
    return (
        <div>
            <div className="container conteudo containerprincipal">
                <form>
                    <p className="h4 text-center mb-4 titulo">Criar alimento</p>
                    <label htmlFor="nomeAlimento" className="grey-text">Nome do alimento:</label>
                    <input 
                        type="text" 
                        id="nomeAlimento" 
                        className="form-control" 
                        onChange={(event) => {this.setState({Vname: event.target.value})}}
                    />
                    <br />
                    <label htmlFor="qtdCalorias" className="grey-text">Qtd. calorias:</label>
                    <input 
                        type="text" 
                        id="qtdCalorias" 
                        className="form-control"
                        onChange={(event) => {this.setState({Vcaloria: event.target.value})}}
                    />
                    <label htmlFor="qtdCarbo" className="grey-text">Qtd. carboidratos:</label>
                    <input 
                        type="text" 
                        id="qtdCarbo" 
                        className="form-control"
                        onChange={(event) => {this.setState({Vcarboidrato: event.target.value})}}
                    />
                    <br />
                    <label htmlFor="qtdProteina" className="grey-text">Qtd. proteínas:</label>
                    <input 
                        type="text" 
                        id="qtdProteina" 
                        className="form-control" 
                        onChange={(event) => {this.setState({Vproteina: event.target.value})}}
                    />
                    <br />
                    <label htmlFor="qtdGordura" className="grey-text">Qtd. gorduras:</label>
                    <input 
                        type="text" 
                        id="qtdGordura" 
                        className="form-control"
                        onChange={(event) => {this.setState({Vgordura: event.target.value})}} 
                    />
                    <br />
                    <label htmlFor="linkImg" className="grey-text">link da imagem do alimento:</label>
                    <input 
                        type="text" 
                        id="linkImg" 
                        className="form-control" 
                        onChange={(event) => {this.setState({Vimglink: event.target.value})}}                      
                    />
                    <br />
                    <div className="text-center mt-5 ">
                    <Link to="/buscaralimento" >
                        <button 
                            className="btn btn-unique botaoAlterar" 
                            type="submit" 
                            onClick={this.onSubmitFood}>
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