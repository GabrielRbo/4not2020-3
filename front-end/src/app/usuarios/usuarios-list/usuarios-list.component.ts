import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

	//Nome da entidade no plural
    usuarios : any = []
    
    // Quantas colunas serão exibidas na tabela e em qual ordem
    displayedColumns : string[] = ['nome','rg','cargo','valor_hora','telefone','editar','excluir']

	//Injeção de depedência ou inversão de controle
  constructor(
      private usuarioSrv : UsuarioService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
        this.usuarios = await this.usuarioSrv.listar()
		
  }

    async excluir(id: string) {
      if(confirm("Deseja realmente excluir?")){
          try {
            await this.usuarioSrv.excluir(id)
            // 1) Recarregar os dados da tabela
            this.ngOnInit()
            // 2) Dar o feedback para Usuário com mensagem
            this.snackBar.open("Item excluído com sucesso.", "Entendi", {
                duration: 6000 // Em milisegundos (3 Segundos)
            })

          }
          catch(erro) {
            // 3) Dar feedback de erro para o usuário
            this.snackBar.open("ERRO: Não foi possível excluir.", "Poxa Vida", {
                duration: 6000 // Em milisegundos (3 Segundos)
            })
            console.log(erro);
            
          }
      }
  }
}