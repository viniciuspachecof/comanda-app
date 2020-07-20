import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.interface';
import { api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URI = api + 'produto';

  constructor(
    private httpClient : HttpClient
  ) { }

  getProdutos() {
    return this.httpClient.get<Produto[]>(this.URI);
  }

  getProduto(id: number) {
    return this.httpClient.get<Produto>(`${this.URI}/${id}`);
  }
}
