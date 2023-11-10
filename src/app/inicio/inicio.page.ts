import { Component , OnInit} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router, private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        console.log(this.user);
      }
    })
  }

  public alertButtons = ['OK'];
  public user = {
    usuario: ""
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      message: "Esta funcion aun no se encuentra disponible",
      buttons: ["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentToast2(){
    const toast = await this.toastController.create({
      message: 'Esta funcion aun no se encuentra disponible', 
      duration:1500,
      position: "bottom"
    });
    toast.present()
  }
}
