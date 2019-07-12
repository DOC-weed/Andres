import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import {reject} from 'q';


@Injectable({
  providedIn: 'root'
})
export class LoginceosService {

  constructor( private AGfauth: AngularFireAuth,
               public AFS: AngularFirestore) { }
  loginservice( email: string, password: string) {
    return new Promise(( resolve, rejected ) => {
      this.AGfauth.auth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => rejected(err));
    } );
  }
  agregarcliente(cliente) {
    return new Promise((resolve, rejected) => {
      this.AFS.collection('123').add({
        activo: cliente.activo,
        imagen: cliente.imagen,
        inactivo: cliente.inactivo,
        nombre: cliente.nombre
      }).then(res => {resolve(res);
      }).catch( err => rejected(err));
    });
  }
  mostrarclientes() {
    return new Promise((resolve) => {
      this.AFS.collection('123').snapshotChanges()
     .subscribe(datosObtenidos => {
            console.log(datosObtenidos);
            resolve(datosObtenidos);
          });
    });
  }
  clientesmostar() {
    return this.AFS.collection('123').snapshotChanges();
  }
}
