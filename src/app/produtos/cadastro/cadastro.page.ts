import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.interface';
import { Categoria } from 'src/app/models/categoria.interface';
import { BusyLoaderService } from 'src/app/services/busy-loader.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  produto: Produto;
  categoria: Categoria[]

  constructor(
    private alertController: AlertController,
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
    private navController: NavController,
    private busyLoader: BusyLoaderService,
    private loadingController: LoadingController
  ) {
    this.produto = {
      nome: '',
      valor: null,
      observacao: '',
      categoria: []
    };
  };

  async ngOnInit() {
    this.listarCategorias();
  };

  carregarProduto() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.produtoService.getProduto(id).subscribe(produto => this.produto = produto);
    }
  };

  compareWith(categoria1: Categoria, categoria2: Categoria) {
    return categoria1 && categoria2 ? categoria1.id === categoria2.id : categoria1 === categoria2;
  };

  async listarCategorias() {
    const busyLoader = await this.busyLoader.create('Carregando categorias...');

    this.categoriaService.getCategorias().subscribe((categoria) => {
      this.categoria = categoria;
      this.carregarProduto();
      busyLoader.dismiss();
    });
  }
};
