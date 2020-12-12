import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GrupoPrensaService {

	private apiServer : string = environment.apiServer
	//Criado para não ser necessário usar apiServer + '<Nome da Rota>'
	private apiUri : string = this.apiServer + 'grupo_prensa'

	constructor(private http: HttpClient) { }

	listar() {
		return this.http.get(this.apiUri).toPromise()
    }
    
    excluir(id: string) {
			 // O método nativo do HTTPCliente não suporta a passagem de um body para o back-end
			 //return this.http.delete(this.apiServer + 'usuario/' + id).toPromise()

			 //O Método request() pode ser usado com qualquer veerbo e aceita a passagem de body
			 return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
			 
    }

    novo(body : any) {
        return this.http.post(this.apiUri, body).toPromise()
    }

    obterUm(id : string) {
      return this.http.get(this.apiUri + '/' + id).toPromise()
    }

    atualizar(body : any) {
      return this.http.put(this.apiUri, body).toPromise()
    }
	
}
