
import "./App.css";
import React from "react";
import styled from 'styled-components'
import "./pressEnter" 


export class App extends React.Component {
  state = {
    chat: [{ Usuario: "", Mensagem: "" }],
    Usuario: "",
    Mensagem: "",
  };

  onChangeUsuario(event) {
    this.setState({ Usuario: event.target.value });
  }
  onChangeMensagem(event) {
    this.setState({ Mensagem: event.target.value });
  }

  onClickAdicionar() {
    const novaArray = [
      ...this.state.chat,
      {
        Usuario: this.state.Usuario,
        Mensagem: this.state.Mensagem,
      },
    ];
    this.setState({ chat: novaArray });
  }

  render() {
    const dadosChat = this.state.chat.map((dado) => {
      return (
        <div>
          <h4>{dado.Usuario}</h4>
          <p>{dado.Mensagem}</p>
        </div>
      );
    });
    
    return (
      <body>
        <div className="body">
          <div className="chat">
            {dadosChat}
          <div className="input">
            <input
              type="text"
              value={this.state.Usuario}
              placeholder="Usuario"
              onChange={(event) => this.onChangeUsuario(event)}
            />
            <input
            type="text"
            value={this.state.Mensagem}
            placeholder="Mensagem"
            onChange={(event) => this.onChangeMensagem(event)}
          />
          <button className="button"onClick={() => this.onClickAdicionar()}>Enviar</button>
          </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
