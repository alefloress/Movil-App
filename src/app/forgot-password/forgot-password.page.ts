import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import { Animation, AnimationController, IonCard } from '@ionic/angular';
import { IonAvatar } from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticacion.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})

export class ForgotPasswordPage {
  @ViewChild(IonAvatar, { read: ElementRef }) avatar!: ElementRef<HTMLIonAvatarElement>;
private animation!: Animation;

constructor(private router: Router, private animationCtrl: AnimationController, private auth: AutenticacionService) {

}
public mensaje = "";
public estado: String = "";

public alertButtons = ['OK'];


ngAfterViewInit() {
  this.animation = this.animationCtrl.create()
    .addElement(this.avatar.nativeElement)
    .duration(8000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.25, transform: 'translateX(100px)', opacity: '0.2' },
      { offset: 0.50, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.75, transform: 'translateX(-100px)', opacity: '0.2' },
      { offset: 0.75, transform: 'translateX(0px)', opacity: '1' },
    ])


  this.animation.play();
  }
}