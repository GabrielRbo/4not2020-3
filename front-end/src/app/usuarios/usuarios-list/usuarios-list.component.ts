import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

	//Nome da entidade no plural
    usuarios : any = []
    
    // Quantas colunas serão exibidas na tabela e em qual ordem
    displayedColumns : string[] = ['nome','cargo','valor_hora','telefone']

	//Injeção de depedência ou inversão de controle
  constructor(private usuarioSrv : UsuarioService) { }

  async ngOnInit() {
        this.usuarios = await this.usuarioSrv.listar()
		
  }

}