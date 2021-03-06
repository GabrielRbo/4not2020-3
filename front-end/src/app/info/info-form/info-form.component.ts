import { UsuarioService } from './../../usuarios/usuario.service';
import { GrupoPrensaService } from '../../grupo-prensa/grupoPrensa.service';
import { SoladoService } from './../../solado/solado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss']
})
export class InfoFormComponent implements OnInit {

	// Variável para armazenar os dados do registro
	info : any = {} // Objeto vazio, nome no SINGULAR

  title : string = 'Cadastro de Prensas' // Para quando for Editar Usuário haja uma destinção
  
  //Variavel para armazenar as listagens de objetos relacionados
  grupoPrensas : any = []
  solados : any = []

  constructor(
    private infoSrv : InfoService,
    private soladoSrv : SoladoService,
    private grupoPrensaSrv : GrupoPrensaService,
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
        this.info = await this.infoSrv.obterUm(this.atvRoute.snapshot.params['id'])

        // 2) Muda titulo da pagina
        this.title = 'Edição de Usuários'
      }
      catch(erro){
        console.log(erro)
        this.snackBar.open("Não possível localizar os dados para edição!!","OK!", { duration: 4000 })
        
      }
    }
    //Carregar as listas de dados entre as entidades relacionadas
    this.carregarDados()
  }

  async carregarDados(){
    try {
      this.grupoPrensas = await this.grupoPrensaSrv.listar()
      this.solados = await this.soladoSrv.listar()
    }
    catch(erro){
      console.log(erro)
      this.snackBar.open(`ERRO: Não foi possível carregar
       todo os dados!!`,'OK!', { duration: 4200 })
      
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
       try {
         //Se o curso já ecistir (caso de edição), ele terá o atributo _id
         if(this.info._id) {
           await this.infoSrv.atualizar(this.info) // Atualizando
         } 
         else {
          //1) Salvar os dados no back-end
           await this.infoSrv.novo(this.info)
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
