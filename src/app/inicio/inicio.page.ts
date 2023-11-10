import { Component , OnInit} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

code: any;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router, private activatedRouter: ActivatedRoute,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.mail = state['user'].mail;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

  public user = {
    usuario: "",
    mail:"",
    password:""
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

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', barcodeData);     
    }).catch(err => {
         console.log('Error', err);
     });
  }
}
