import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) { }
  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();
  }

}
