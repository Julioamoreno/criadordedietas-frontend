import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/import";
import { setToken } from "../../services/auth";

class SignIn extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
        e.preventDefault();
        const { login,  senha } = this.state;
        if (!login || !senha) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
            const response = await api.post("/users/auth", { login, senha });
            setToken(response.data.token);
            localStorage.setItem("user",login);
            localStorage.setItem("ID", response.data.user._id);
            
            this.props.history.push("/inicio");
            } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao logar na sua conta. T.T" });
            }
        }
  };

  

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ login: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <button type="submit">Fazer Login</button>
        </Form>
      </Container>
    );
  }
}

export default  withRouter(SignIn);