import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService, ada } from 'src/app/services/api.service';
import { Item, StorageService } from '../../../services/storage.service';


@Component({
  selector: 'app-cardano',
  templateUrl: './cardano.page.html',
  styleUrls: ['./cardano.page.scss'],
})

export class CardanoPage implements OnInit{
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
    this.api.getDataOfCurrency((ada.valueOf())).subscribe(res => {
      console.log(res);
      this.dataCurrency = res;
    })
  }

  getDataOfName(){
    this.api.getDataOfName((ada.valueOf())).subscribe(res => {
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
