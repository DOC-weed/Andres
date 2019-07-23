import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginceosService {

  constructor( private AGfauth: AngularFireAuth,
               public AFS: AngularFirestore,
               private bd: AngularFireDatabase,
               private afstorage: AngularFireStorage) { }


   loginservice( email: string, password: string) {
    return new Promise(( resolve, rejected ) => {
      this.AGfauth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => rejected(err));
    } );
  }
  agregarcliente(clientes) {
    return  this.AFS.collection('123').add( clientes);
  }
  mostrarcliente() {
    return this.AFS.collection('123').snapshotChanges();
  }
  getfile() {
    const ref = this.bd.list('123');
    return ref.snapshotChanges().subscribe(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });
  }
  uploadtoStorage(information): AngularFireUploadTask {
    const newname = '${new date().getTime()}.txt';
    return this.afstorage.ref('file/${newname}').putString(information);
  }
  storeInfoToDatabase(metainfo) {
    const tosave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    };
    return this.bd.list('files').push(tosave);
  }

  deletefile(file) {
    const key = file.key;
    const storagePath = file.fullPath;
    const ref = this.bd.list('file');
    ref.remove(key);
    return this.afstorage.ref(storagePath).delete();
  }

}
