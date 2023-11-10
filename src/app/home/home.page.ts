import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    public toastController: ToastController,
    private router: Router,private animationCtrl:AnimationController
  ) { }
  public mensaje = ""

  ngOnInit() {
  }
  
  enviarInformacion(){
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    this.router.navigate(['/home'],navigationExtras);
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Bienvenido Riquelme', 
      duration:500,
      position: "middle"
    });
    toast.present()
  }

  user = {
    usuario: "",
    password: ""
  }
}
