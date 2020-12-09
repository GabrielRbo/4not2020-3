import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

	private apiServer = environment.apiServer

	constructor(private http: HttpClient) { }

	listar() {
		return this.http.get(this.apiServer + 'administrador').toPromise()
	}
	
}
