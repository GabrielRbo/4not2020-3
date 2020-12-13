import { UsuarioService } from './../../usuarios/usuario.service';
import { SoladoService } from './../../solado/solado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GrupoPrensaService } from './../grupoPrensa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupo-prensa-form',
  templateUrl: './grupo-prensa-form.component.html',
  styleUrls: ['./grupo-prensa-form.component.scss']
})
export class GrupoPrensaFormComponent implements OnInit {

	// Variável para armazenar os dados do registro
	grupoPrensa : any = {} // Objeto vazio, nome no SINGULAR

  //Variaveis para armazenar os dados dos outros objetos
  solados : any = []
  usuarios : any = []

	title : string = 'Cadastro de Grupo' // Para quando for Editar Usuário haja uma destinção

  constructor(
    private grupoPrensaSrv : GrupoPrensaService,
    private soladoSrv : SoladoService,
    private usuarioSrv : UsuarioService,
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
        this.grupoPrensa = await this.grupoPrensaSrv.obterUm(this.atvRoute.snapshot.params['id'])

        // 2) Muda titulo da pagina
        this.title = 'Edição de Grupo'
      }
      catch(erro){
        console.log(erro)
        this.snackBar.open("Não possível localizar os dados para edição!!","OK!", { duration: 4000 })
        
      }
    }
    //Chama função para carregar dados
    this.carregarDados()

  }

  async salvar(form: NgForm) {
    if(form.valid) {
       try {
         //Se o curso já ecistir (caso de edição), ele terá o atributo _id
         if(this.grupoPrensa._id) {
           await this.grupoPrensaSrv.atualizar(this.grupoPrensa) // Atualizando
         } 
         else {
          //1) Salvar os dados no back-end
           await this.grupoPrensaSrv.novo(this.grupoPrensa)
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

  async carregarDados() {
      try {
          this.solados = await this.soladoSrv.listar()
          this.usuarios = await this.usuarioSrv.listar()
      }
      catch(erro) {
        console.log(erro);
        this.snackBar.open("Erro ao carregar os dados", 'OK!',{ duration: 4200 })
        
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
