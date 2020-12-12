import { GrupoPrensaService } from '../grupoPrensa.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grupoPrensa-list',
  templateUrl: './grupo-prensa-list.component.html',
  styleUrls: ['./grupo-prensa-list.component.scss']
})
export class GrupoPrensaListComponent implements OnInit {

	//Nome da entidade no plural
    grupoPrensas : any = []
    
    // Quantas colunas serão exibidas na tabela e em qual ordem
    displayedColumns : string[] = ['codigo','capacidade','solado_prod','usuario','editar','excluir']

	//Injeção de depedência ou inversão de controle
  constructor(
      private grupoPrensaSrv : GrupoPrensaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
        this.grupoPrensas = await this.grupoPrensaSrv.listar()
		
  }

    async excluir(id: string) {
      if(confirm("Deseja realmente excluir?")){
          try {
            await this.grupoPrensaSrv.excluir(id)
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