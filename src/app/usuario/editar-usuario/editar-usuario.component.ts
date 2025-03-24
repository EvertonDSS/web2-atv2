import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: false,
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {

  usuario: { id: number; nome: string } | null = null;

  constructor(private usuarioService: UsuarioService) { }

  buscarUsuario(idInput: HTMLInputElement) {
    const id = parseInt(idInput.value.trim(), 10);

    const usuarioEncontrado = this.usuarioService.getUsuarios().find(u => u.id === id);
    if (usuarioEncontrado) {
      this.usuario = { ...usuarioEncontrado };
    } else {
      alert('Usuário não encontrado.');
    }
    idInput.value = '';
  }

  salvarUsuario(nomeInput: HTMLInputElement) {
    if (this.usuario) {
      this.usuario.nome = nomeInput.value.trim();
      this.usuarioService.updateUsuario(this.usuario.id, this.usuario.nome);
      nomeInput.value = '';
    }
  }
}
