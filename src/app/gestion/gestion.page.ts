import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { IonModal } from '@ionic/angular';

interface dataAPI {
  id: Number,
  nombre: String
}

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor(private api: ApiService) { }

  public datosAPI = "";

  public post = {
    id: 0,
    nombre: ""
  }

  ngOnInit() {
  }

  cancelAddModal() {
    this.modal.dismiss(null, 'cancel');
  }
  
  confirmAddModal() {
    console.log(this.post);
    this.api.createPost(this.post).subscribe((success) => {
      this.datosAPI = "Agregado con Exito  ";
    }, (err) => {
      console.error(err);
    })
    this.modal.dismiss(null, 'confirm');
  }

  eliminar(id: any) {
    this.api.deletePost(id).subscribe((res) => {
      this.datosAPI = "Eliminado con exito";
    }, (err) => {
      console.error(err);
    })
  }
}
