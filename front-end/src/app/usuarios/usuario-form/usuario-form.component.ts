import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

	// Variável para armazenar os dados do registro
	usuario : any = {} // Objeto vazio, nome no SINGULAR


  cargos : any = [
    { valor: 'Gestor'},
    { valor: 'Operador'}
  ]

	title : string = 'Cadastro de Usuário' // Para quando for Editar Usuário haja uma destinção

  constructor(
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
        this.usuario = await this.usuarioSrv.obterUm(this.atvRoute.snapshot.params['id'])

        // 2) Muda titulo da pagina
        this.title = 'Edição de Usuários'
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
         if(this.usuario._id) {
           await this.usuarioSrv.atualizar(this.usuario) // Atualizando
         } 
         else {
          //1) Salvar os dados no back-end
           await this.usuarioSrv.novo(this.usuario)
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
