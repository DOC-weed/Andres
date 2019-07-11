import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import {variable} from '@angular/compiler/src/output/output_ast';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  usario = 'ceos';
  contrasena = 'ceos';



constructor(public push: Push, public navCtrl: NavController,
            public router: Router) { }


ngOnInit() {
  }

/* iniciarsesion( ) {
    if ( )
      this.router.navigate(['tab1']);

  }
*/
}
