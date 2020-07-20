import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produtos: Produto[];

  constructor(
    private alertController: AlertController,
    private produtoService: ProdutoService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listar();
  }

  async listar() {
    const loading = await this.loadingController.create({
      message: 'Carregando'
    });
    loading.present();
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
      loading.dismiss();
    });
  };
};
