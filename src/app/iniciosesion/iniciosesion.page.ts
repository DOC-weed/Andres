import { Component, OnInit } from '@angular/core';
import { LoginceosService} from '../loginceos.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
  providers: [LoginceosService],
})
export class IniciosesionPage implements OnInit {
  email: string;
  password: string;

  constructor( private  authservice: LoginceosService, public router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authservice.loginservice(this.email, this.password).then(res => {
      this.email = '';
      this.password = '';
      this.router.navigate(['/tabs']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'));
  }

}
