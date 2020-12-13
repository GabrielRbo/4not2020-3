import { GrupoPrensaService } from './../../grupo-prensa/grupoPrensa.service';
import { InfoService } from '../info.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

	//Nome da entidade no plural
    infos : any = []
    
    // Quantas colunas serão exibidas na tabela e em qual ordem
    displayedColumns : string[] = ['cod','marca','grupo_prensas','dtCompra','editar','excluir']

	//Injeção de depedência ou inversão de controle
  constructor(
      private infoSrv : InfoService,
      private grupoPrensaSrv : GrupoPrensaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
        this.infos = await this.infoSrv.listar()
		
  }

    async excluir(id: string) {
      if(confirm("Deseja realmente excluir?")){
          try {
            await this.infoSrv.excluir(id)
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