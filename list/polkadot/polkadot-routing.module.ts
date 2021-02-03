import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolkadotPage } from './polkadot.page';

const routes: Routes = [
  {
    path: '',
    component: PolkadotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolkadotPageRoutingModule {}
