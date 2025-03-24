import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  standalone: false,
  templateUrl: './inserir-usuario.component.html',
  styleUrl: './inserir-usuario.component.css'
})
export class InserirUsuarioComponent {
  nome: string = '';

  constructor(private usuarioService: UsuarioService) {
  }
  adicionarUsuario(nomeInput: HTMLInputElement) {
    const nome = nomeInput.value.trim();
    this.usuarioService.addUsuario(nome);
    nomeInput.value = '';
  }

}
