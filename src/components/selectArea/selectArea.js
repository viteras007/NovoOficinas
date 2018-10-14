import React, { Component } from 'react';

import FormControl from 'react-bootstrap/lib/FormControl';

export default class SelectArea extends Component {
    render() {
        return (
            <div>
                <FormControl componentClass="select" placeholder="Selecionar instituição">
                    <option value='cienciaAlimentos'>Ciência Alimentos</option>
                    <option value='cienciaComputacao'>Ciência Computação</option>
                    <option value='cienciasAgrarias'>Ciência Agrarias</option>
                    <option value='cienciasAmbientais'>Ciência Ambientais</option>
                    <option value='educacao'>Educação</option>
                    <option value='ensino'>Ensino</option>
                    <option value='engenhariasIII'>Engenharias III</option>
                    <option value='engenhariasVI'>Engenharia VI</option>
                    <option value='interdisciplinas'>Interdisciplinas</option>
                    <option value='zootecnia'>Zootecnia</option>
                </FormControl>
            </div>
        )
    }
}