import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolkadotPageRoutingModule } from './polkadot-routing.module';

import { PolkadotPage } from './polkadot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolkadotPageRoutingModule
  ],
  declarations: [PolkadotPage]
})
export class PolkadotPageModule {}
