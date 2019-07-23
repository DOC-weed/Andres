import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule} from '@angular/fire';
import {LoginceosService} from '../loginceos.service';
import {forEach} from '@angular-devkit/schematics';
import {AngularFireStorage} from '@angular/fire/storage';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  clientes = [];
  cl: any;
  // img: string;
  // nombre: string;
  // activo: boolean;
    // inactivo: boolean;

  constructor(private rot: Router,
              private loginservice: LoginceosService,
              private AFM: AngularFireModule,
              ) {}

    ngOnInit() {
        this.loginservice.mostrarcliente().subscribe(data => {
            this.cl = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    clientes: e.payload.doc.data()
                };
            });
            console.log(this.cl);
        }),
            // tslint:disable-next-line:no-unused-expression
            (error) => {
            console.error(error);
        };
    }
}
