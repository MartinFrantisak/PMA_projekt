import { Component, ViewChild } from '@angular/core';
import { Router, NavigationExtras, RouterOutlet } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Item, StorageService } from '../../services/storage.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage{
  @ViewChild(RouterOutlet) outlet: RouterOutlet;


  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;
  
  dataAPI: any;
  constructor(private router: Router,  public api : ApiService) 
  {}
    goToBitcoin() {
      this.router.navigate(['../tabs/bitcoin'])
    }
    goToEthereum() {
      this.router.navigate(['../tabs/ethereum'])
    }
    goToCardano() {
      this.router.navigate(['../tabs/cardano'])
    }
    goToPolkadot() {
      this.router.navigate(['../tabs/polkadot'])
    }

    ngOnInit() {
      this.getData();
    }

    getData(){
      this.api.getData().subscribe(res => {
        console.log(res);
        this.dataAPI = res;
      console.log(this.dataAPI);
      })
    }
    
    searchAsset() {
      const search = this.newItem.title;
      console.log(search);
      requestAnimationFrame(()=>{
        this.dataAPI.content.forEach(item => {
          console.log(item);
          const inputExists = item.name === search;
          if(inputExists == true) {
            const idACT = item.id;
            console.log(idACT);
            let navigationExtras: NavigationExtras = {
              queryParams: {
                "idACT": idACT
              }
            };
            this.router.navigate(['./tabs/actual'], navigationExtras).then(() => {
              window.location.reload();
            });
          }
        });
      })
    }
    
}

