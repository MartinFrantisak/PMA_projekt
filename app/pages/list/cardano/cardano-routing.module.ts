import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardanoPage } from './cardano.page';

const routes: Routes = [
  {
    path: '',
    component: CardanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardanoPageRoutingModule {}
