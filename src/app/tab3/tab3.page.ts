import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {LoginceosService} from '../loginceos.service';
import { AngularFireModule} from '@angular/fire';
import {element} from 'protractor';
import {createInterface} from 'readline';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public navCtrl: NavController,
              public formbuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private fire: AngularFireModule,
              private loginservice: LoginceosService
              ) {}
  public;
  processing: boolean;
  uploadImage: string | ArrayBuffer;
  img = '';
  cbgUsername = '';
  cbgestatus;
  cbgestatus1;
  image1: string;
  name1: string;
  chk1 = true;
  chk2 = false;
  cliente;
  presentActionSheet(fileLoader) {
    fileLoader.click();
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    fileLoader.onchange = function() {
      const file = fileLoader.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        that.processing = true;
        that.getOrientation(fileLoader.files[0], function(orientation) {
          if (orientation > 1) {
            that.resetOrientation(reader.result, orientation, function(resetBase64Image) {
              that.uploadImage = resetBase64Image;
            });
          } else {
            that.uploadImage = reader.result;
          }
        });
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  }
  imageLoaded() {
    this.processing = false;
  }
  getOrientation(file, callback) {
    const reader = new FileReader();
    reader.onload = function(e: any) {

      const view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xFFD8) { return callback(-2); }
      let length = view.byteLength, offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xFFE1) {
          if (view.getUint32(offset += 2, false) !== 0x45786966) { return callback(-1); }
          const little = view.getUint16(offset += 6, false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
              // tslint:disable-next-line:triple-equals
            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        } else if ((marker & 0xFF00) !== 0xFF00) { break; } else { offset += view.getUint16(offset, false); }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file);
  }
  resetOrientation(srcBase64, srcOrientation, callback) {
    const img = new Image();

    img.onload = function() {
      const width = img.width,
          height = img.height,
          canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d');

      // set proper canvas dimensions before transform & export
      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      // transform context before drawing image
      switch (srcOrientation) {
        case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
        case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
        case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
        case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
        case 7: ctx.transform(0, -1, -1, 0, height, width); break;
        case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
        default: break;
      }


      ctx.drawImage(img, 0, 0);


      callback(canvas.toDataURL());
    };

    img.src = srcBase64;
  }
  removePic() {
    this.uploadImage = null;
  }
  cancelar() {
    this.img = null;
    this.uploadImage = null;
    this.cbgUsername = '';
    this.cbgestatus = true;
    this.cbgestatus1 = false;
  }
  datos() {
    const capturadatos = [];
    capturadatos[0] = (document.getElementById('fileLoader') as HTMLInputElement).value;
    capturadatos[1] = (document.getElementById('nombre') as HTMLInputElement).value;
    capturadatos[2] = (document.getElementById('activo') as HTMLIonRadioElement).checked;
    capturadatos[3] = (document.getElementById('inactivo') as HTMLIonRadioElement).checked;
    this.image1 = capturadatos[0];
    this.name1 = capturadatos[1];
    this.chk1 = capturadatos[2];
    this.chk2 = capturadatos[3];
    this.cliente = {
      imagen: this.image1,
      nombre: this.name1,
      activo : this.chk1,
      inactivo: this.chk2
    };
    this.loginservice.agregarcliente(this.cliente).then( res => {
      alert('Cliente agregado');
      this.img = null;
      this.uploadImage = null;
      this.cbgUsername = '';
      this.cbgestatus = true;
      this.cbgestatus1 = false;
    });

    }





}















