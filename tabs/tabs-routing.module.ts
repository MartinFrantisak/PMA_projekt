import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'favourite',
        loadChildren: () => import('../pages/favourite/favourite.module').then(m => m.FavouritePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'actual',
        loadChildren: () => import('../pages/list/actual/actual.module').then(m => m.ActualPageModule)
      },
      {
        path: 'bitcoin',
        loadChildren: () => import('../pages/list/bitcoin/bitcoin.module').then(m => m.BitcoinPageModule)
      },
      {
        path: 'cardano',
        loadChildren: () => import('../pages/list/cardano/cardano.module').then(m => m.CardanoPageModule)
      },
      {
        path: 'polkadot',
        loadChildren: () => import('../pages/list/polkadot/polkadot.module').then(m => m.PolkadotPageModule)
      },
      {
        path: 'ethereum',
        loadChildren: () => import('../pages/list/ethereum/ethereum.module').then(m => m.EthereumPageModule)
      },   
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
