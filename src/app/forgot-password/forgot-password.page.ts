import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})


/* Intentamos animar el boton de ingresar para que se desplazara a un lado pero no pudimos,
   por eso esta zona esta en formato de comentario
   
    export class ExampleComponent {
      @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;

      private animation: Animation;

      constructor(private animationCtrl: AnimationController) {}

      ngAfterViewInit() {
        this.animation = this.animationCtrl
          .create()
          .addElement(this.card.nativeElement)
          .duration(1500)
          .iterations(Infinity)
          .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
          .fromTo('opacity', '1', '0.2');
      }
    }
*/

export class ForgotPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
