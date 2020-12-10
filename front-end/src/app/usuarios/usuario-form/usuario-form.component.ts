import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

	// Variável para armazenar os dados do registro
	usuario : any = {} // Objeto vazio, nome no SINGULAR


	title : string = 'Cadastro de Usuário' // Para quando for Editar Usuário haja uma destinção

  constructor() { }

  ngOnInit(): void {
  }

}
