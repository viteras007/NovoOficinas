// React
import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

// CSS
import "../../cssPadrao/cssPadrao.css";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            
        }   

    }
    
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3001/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.Id){
                    console.log(user.name + ' LOGOU');
                    sessionStorage.setItem('user', JSON.stringify(user));
                    sessionStorage.setItem('logado', true);

                    this.props.logar(sessionStorage.getItem('logado'));
                    //this.funcaoteste(true);
                    // ROTA PARA ELE LOGADO
                    // POSSIVEL USAR TODOS DADOS DO USUARIO                

                }
                else{
                    console.log('ERROR');
                    sessionStorage.setItem('logado', false);
                    // MENSAGEM DE ERRO
                }
            })            
    }   
  render() {
    return (
        <div>
            <div className="container-fluid container-login">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                        <FormControl 
                            type="email" 
                            placeholder="Email" 
                            onChange={this.onEmailChange} />
                        </Col>                        
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Password
                        </Col>
                        <Col sm={10}>
                        <FormControl 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.onPasswordChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup
                    type="submit"
                    onClick={this.onSubmitSignIn}>
                        <Col smOffset={2} sm={10}>
                        <Button>Logar</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
  }
}