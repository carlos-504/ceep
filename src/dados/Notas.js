export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.notas));
  }

  deletarNota(index) {
    this.notas.splice(index, 1);
    this.notificar();
  }

  criarNota(titulo, data, texto, categoria) {
    const novaNota = new Notas(titulo, data, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }
}

class Notas {
  constructor(titulo, data, texto, categoria) {
    this.titulo = titulo;
    this.data = data;
    this.texto = texto;
    this.categoria = categoria;
  }
}
