import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardanoPageRoutingModule } from './cardano-routing.module';

import { CardanoPage } from './cardano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardanoPageRoutingModule
  ],
  declarations: [CardanoPage]
})
export class CardanoPageModule {}
