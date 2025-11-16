import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Vida' },
    { codEditora: 2, nome: 'CPAD' },
    { codEditora: 3, nome: 'Thomas Nelson Brasil' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
  const found = this.editoras.find(e => e.codEditora === codEditora);
  return found ? found.nome : '';
}
}
