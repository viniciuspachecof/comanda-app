import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ComandaService } from '../services/comanda.service';
import { Comanda } from '../models/comanda.interface';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.page.html',
  styleUrls: ['./comandas.page.scss'],
})
export class ComandasPage implements OnInit {

  comandas: Comanda[];

  constructor(
    private alertController: AlertController,
    private comandaService: ComandaService,
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
    this.comandaService.getComandas().subscribe((data) => {
      this.comandas = data;
      loading.dismiss();
    });
  }

  async mensagemAlerta() {
    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Erro ao excluir a comanda.',
      buttons: ['OK']
    });

    await alerta.present();
  };
};