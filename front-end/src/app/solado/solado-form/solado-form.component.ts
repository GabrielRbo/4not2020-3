import { MatSnackBar } from '@angular/material/snack-bar';
import { SoladoService } from './../solado.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solado-form',
  templateUrl: './solado-form.component.html',
  styleUrls: ['./solado-form.component.scss']
})
export class SoladoFormComponent implements OnInit {

	// Variável para armazenar os dados do registro
	solado : any = {} // Objeto vazio, nome no SINGULAR

	title : string = 'Cadastro de Solados' // Para quando for Editar Usuário haja uma destinção

  constructor(
    private soladoSrv : SoladoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private atvRoute : ActivatedRoute
    ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na ULR (rota)
    if(this.atvRoute.snapshot.params['id']) {
      //1) Acionar o back-end para buscar esse registro
      // e disponibiliza-lo para edição
      try {
        this.solado = await this.soladoSrv.obterUm(this.atvRoute.snapshot.params['id'])

        // 2) Muda titulo da pagina
        this.title = 'Edição de Solados'
      }
      catch(erro){
        console.log(erro)
        this.snackBar.open("Não possível localizar os dados para edição!!","OK!", { duration: 4000 })
        
      }
    }

  }

  async salvar(form: NgForm) {
    if(form.valid) {
       try {
         //Se o curso já ecistir (caso de edição), ele terá o atributo _id
         if(this.solado._id) {
           await this.soladoSrv.atualizar(this.solado) // Atualizando
         } 
         else {
          //1) Salvar os dados no back-end
           await this.soladoSrv.novo(this.solado)
         }
         
        //2) Dar o feedback para o usuário
        this.snackBar.open("Dados salvos com Sucesso!", "OK!", {duration: 6000})
        //3) Voltar ao componente de listagem
        this.location.back()
        }
        catch(erro) {
          console.log(erro);
          this.snackBar.open("ERRO: Não foi possível salvar os dados", "OK!", {duration: 6000})
          
        }
    }
  }

  voltar(form: NgForm) {
    let result = true
    //form.dirty = Formulário "sujo", não salvo (via código)
    //form.touched = O Conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm("Há dados não salvos. Deseja sair ?")
    }

    if (result) this.location.back()
  }

}
