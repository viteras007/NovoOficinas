import React, { Component } from 'react';

import instituicoes from '../../mock/instituicoes';

import FormControl from 'react-bootstrap/lib/FormControl';

import './selectInstituicoes';

export default class SelectInstituicoes extends Component {
    componentDidMount() {
        // axios.get('http://www.http://observatorioiftm.ernanimelo.pro.br/api/Estatistica/QuaisInstituicoes', {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        // }).then((res) => {
        //   console.log(res);
        // }).catch((error) => {
        //   console.log(error);
        // });
    }

    render() {
        return (
            <div>
                <FormControl componentClass="select" placeholder="Selecionar instituição">
                    {
                        instituicoes.map(instituicao => <option value={instituicao.id} key={instituicao.id}> {instituicao.nome} </option>)
                    }
                </FormControl>
            </div>
        )
    }
}