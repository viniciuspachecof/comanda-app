import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comanda } from '../models/comanda.interface';
import { api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private URI = api + 'comanda';
  
  constructor(
    private httpClient:HttpClient
  ) { };
    
  getComandas() {
    return this.httpClient.get<Comanda[]>(this.URI);
  };

  private adicionar(comanda: Comanda) {
    return this.httpClient.post(this.URI, comanda);
  };

  private atualizar(comanda: Comanda) {
    return this.httpClient.put(`${this.URI}/${comanda.id}`, comanda);
  };

  getComanda(id: number) {
    return this.httpClient.get<Comanda>(`${this.URI}/${id}`);
  };

  salvar(comanda: Comanda) {
    if(comanda.id) {
      return this.atualizar(comanda);
    } else {
      return this.adicionar(comanda);
    }
  };
};
