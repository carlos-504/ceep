import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.data = "";
    this.categoria = "Sem Categoria";
    this.state = {
      categorias: []
    };
    this._criarCategorias = this._criarCategoria.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._criarCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._criarCategorias);
  }

  _criarCategoria(categorias){
    this.setState({...this.state, categorias})
  }

  _handlerMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    evento.stopPropagation();
    console.log(this.titulo);
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value;
    evento.stopPropagation();
  }

  _handlerMudancaData(evento) {
    this.data = evento.target.value;
    evento.stopPropagation();
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.data, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._handlerMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <input
          type="date"
          placeholder="Data"
          className="form-cadastro_input"
          onChange={this._handlerMudancaData.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
