import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.interface';
import { api } from './api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private URI = api + 'categoria';

  constructor(
    private httpClient : HttpClient
  ) { }

  getCategorias() {
    return this.httpClient.get<Categoria[]>(this.URI);
  }

  getCategoria(id: number) {
    return this.httpClient.get<Categoria>(`${this.URI}/${id}`);
  }
}
