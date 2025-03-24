import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }
  private usuarios: { id: number; nome: string }[] = [
    { id: 1, nome: 'usuario1' },
    { id: 2, nome: 'usuario2' },
    { id: 3, nome: 'usuario3' }
  ];
  private nextId = this.usuarios.length + 1;

  getUsuarios() {
    return this.usuarios;
  }

  addUsuario(nome: string) {
    this.usuarios.push({ id: this.nextId++, nome });
  }

  updateUsuario(id: number, novoNome: string) {
    const user = this.usuarios.find(u => u.id === id);
    if (user) user.nome = novoNome;
  }

}
