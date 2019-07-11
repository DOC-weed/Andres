import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule} from '@angular/fire';
import {LoginceosService} from '../loginceos.service';
import {forEach} from '@angular-devkit/schematics';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cliente = [];



  constructor(private rot: Router,
              private loginservice: LoginceosService,
              private AFM: AngularFireModule) {
  }


  ionViewWillEnter() {
    this.obtenerclientes();
  }
  obtenerclientes() {
    this.loginservice.mostrarclientes().then(CObt => {
      this.cliente = [];
      /*CObt.forEach((clientes: any) => {
        this.cliente.push({
          id: clientes.playload.doc.id,
          data: clientes.playload.doc.data()
        });
      });*/
    });
  }

}
