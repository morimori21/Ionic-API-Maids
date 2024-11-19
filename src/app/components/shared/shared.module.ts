import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

const components = [CardComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: components,  
})
export class SharedModule { }