import { Component, OnInit } from '@angular/core';
import {Crop} from '@ionic-native/crop/ngx';
import {File} from '@ionic-native/file/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import { LoginceosService} from '../loginceos.service';
import {Observable, Subscription} from 'rxjs';
import {AlertController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {
  croppedImagepath = '';
  isLoading = false;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  files: Subscription;
  // @ts-ignore
    constructor(
      private crop: Crop,
      private imagepicker: ImagePicker,
      private file: File,
      private login: LoginceosService,
      private AlertCtrl: AlertController,
      private toastctrl: ToastController,
      private iab: InAppBrowser
  ) { // this.files = this.login.getfile();
  }

  ngOnInit() {
  }
   /* pickImage() {
    this.imagepicker.getPictures(this.imagePickerOptions).then((results) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.cropImage(results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }
  cropImage(imgpath) {
    this.crop.crop(imgpath, { quality: 50})
        .then(
            newPath => {
              this.showCroppedImage(newPath.split('?')[0]);
            }, error => { alert('error cropping image' + error); }
        );
  }
  showCroppedImage(ImagePath) {
    this.isLoading = true;
    const copyPath = ImagePath;
    const splitPath = copyPath.split('/');
    const imageName = splitPath[splitPath.length - 1];
    const filePath = ImagePath.split(imageName)[0];
    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('error in showing image' + error);
      this.isLoading = false;
    });
  } */
  /* addfile() {
    const inputAlert = this.AlertCtrl.create({
      header: 'Store new information',
      inputs: [{
        name: 'info',
        placeholder: 'Lorem ipsum dolor...'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }]
    });
    inputAlert.catch();
  }*/
 /* uploadInformation(text) {
    const upload = this.login.uploadtoStorage(text);
    upload.then().then(res => {
      this.login.storeInfoToDatabase(res.metadata).then(() => {
        const toast = this.toastctrl.create({
          message: 'new file added!',
          duration: 3000
        });
        toast.catch();
      });
    });
}
deleteFile(file) {
    this.login.deletefile(file).subscribe(() => {
      const toast = this.toastctrl.create({
        message: 'File removed!',
        duration: 3000
      });
      toast.catch();
    });
}
viewFile(url) {
   this.iab.create(url);
} */
}
