import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AutenticacionService } from '../servicios/autenticacion.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonModal) modal!: IonModal;

  constructor(
    public toastController: ToastController,
    private router: Router,private animationCtrl:AnimationController,
    private auth: AutenticacionService
  ) { }
  public mensaje = "";
  public estado: String = "";

  user = {
    usuario: "",
    mail:"",
    password: ""
  }

  enviarInformacion() {
    this.auth.login(this.user.usuario, this.user.mail, this.user.password).then(() => {

      if (this.auth.autenticado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/inicio'], navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
    });
  }


  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Bienvenido Riquelme', 
      duration:500,
      position: "middle"
    });
    toast.present()
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.mail != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario, Mail y contraseña deben tener algun valor"
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.auth.register(this.user.usuario, this.user.mail, this.user.password).then((res) => {
      if (res) {
        this.estado = "Usuario Existente";
      } else {
        this.mensaje = "Registro Exitoso";
        this.modal.dismiss(this.user.usuario, 'confirm');
      }
    })
  }
}
