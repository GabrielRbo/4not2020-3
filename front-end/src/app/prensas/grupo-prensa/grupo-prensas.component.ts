
import { GrupoPrensasService } from "../GrupoPrensasService";
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-grupo-prensa',
    templateUrl: './grupo-prensas.component.html',
    styleUrls: ['./grupo-prensas.component.scss']
})
export class GrupoPrensasComponent implements OnInit {
    // Nome da entidade no plural
 
    prensas: any = [];
    //Injeção de dependência ou inversão de controle
    constructor(private GrupoPrensas : GrupoPrensasService) { }

    async ngOnInit() {
        this.prensas = await this.GrupoPrensas.listar()
        console.log(this.prensas)
    }
}