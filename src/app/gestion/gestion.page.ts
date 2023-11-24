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
  
  obtenerTodo() {
    this.datosAPI = ""
    this.api.getPosts().subscribe((res) => {
      console.log(res);
      res.forEach((tmp: dataAPI) => {
        this.datosAPI += tmp.id + "\n";
        this.datosAPI += tmp.nombre + "\n";
      });
    }, (error) => {
      console.log(error);
    })
  }

  eliminar(id: any) {
    this.api.deletePost(id).subscribe((res) => {
      this.datosAPI = "Eliminado con exito";
    }, (err) => {
      console.error(err);
    })
  }
  modificar(id: any) {
    this.api.getPost(id).subscribe((res: dataAPI) => {
      console.log(res);
      this.post.id = res.id;
      this.post.nombre = res.nombre;


    }, (err) => {
      console.error(err.message)
    })
  }

  cancelUpdateModal() {
    this.updateModal.dismiss(null, 'cancel');
  }

  confirmUpdateModal() {
    console.log(this.post);
    this.api.updatePost(this.post.id, this.post).subscribe((success) => {
      this.datosAPI = "Modificado con Exito  ";
    }, (err) => {
      console.error(err);
    })
    this.updateModal.dismiss(null, 'confirm');
  }
}
