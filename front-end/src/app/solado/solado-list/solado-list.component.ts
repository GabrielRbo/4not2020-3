import { SoladoService } from '../solado.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solados-list',
  templateUrl: './solado-list.component.html',
  styleUrls: ['./solado-list.component.scss']
})
export class SoladoListComponent implements OnInit {

	//Nome da entidade no plural
    solados : any = []
    
    // Quantas colunas serão exibidas na tabela e em qual ordem
    displayedColumns : string[] = ['codigo','referencia','tempo_producao','valor_par','editar','excluir']

	//Injeção de depedência ou inversão de controle
  constructor(
      private soladoSrv : SoladoService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
        this.solados = await this.soladoSrv.listar()
		
  }

    async excluir(id: string) {
      if(confirm("Deseja realmente excluir?")){
          try {
            await this.soladoSrv.excluir(id)
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