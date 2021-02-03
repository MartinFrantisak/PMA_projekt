import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService, btc } from 'src/app/services/api.service';
import { Item, StorageService } from '../../../services/storage.service';


@Component({
  selector: 'app-polkadot',
  templateUrl: './polkadot.page.html',
  styleUrls: ['./polkadot.page.scss'],
})

export class PolkadotPage implements OnInit{
  dataCurrency: any;
  dataName: any;
  constructor(private storageService: StorageService, public api : ApiService, private toasController: ToastController) 
  {
  }
  
  ngOnInit() {
    this.getDataOfCurrency();
    this.getDataOfName();
  }

  getDataOfCurrency(){
    this.api.getDataOfCurrency((btc.valueOf())).subscribe(res => {
      console.log(res);
      this.dataCurrency = res;
    })
  }

  getDataOfName(){
    this.api.getDataOfName((btc.valueOf())).subscribe(res => {
      console.log(res);
      this.dataName = res;
    })
  }

  addItem() {

    let newItem: Item = <Item>{};
    newItem.id = Date.now();
    newItem.title = this.dataName.name;
    this.storageService.addItem(newItem).then(item => {
      this.showToast('Item added');
    })
  }
  async showToast(msg) {
    const toast = await this.toasController.create({
      message: msg,
      duration: 450
    });
    toast.present();
  }
}
