import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'A cruz de Cristo',
      resumo: 'Um estudo criterioso da fé cristã',
      autores: ['John Stott']
      
    },
    
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

incluir(livro: Livro): void {
  let novoCodigo = 1;
  if (this.livros.length > 0) {
    novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
  }
  livro.codigo = novoCodigo;


  const copia: Livro = {
    codigo: livro.codigo,
    codEditora: livro.codEditora,
    titulo: livro.titulo,
    resumo: livro.resumo,
    autores: [...(livro.autores || [])]
  };

  this.livros.push(copia);
}
  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
