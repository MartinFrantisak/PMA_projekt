import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";
import { ToastController } from '@ionic/angular';
import { Item, StorageService } from '../../../services/storage.service';


@Component({
  selector: 'app-actual',
  templateUrl: './actual.page.html',
  styleUrls: ['./actual.page.scss'],
})
export class ActualPage implements OnInit {
  public idACT: string;
  
  dataCurrency: any;
  dataName: any;
  constructor(public api : ApiService, private route: ActivatedRoute, private http: HttpClient, private toasController: ToastController, private storageService: StorageService) { 
    this.route.queryParams.subscribe(params => {
      this.idACT = params["idACT"];
    });
  }

  ngOnInit() {
    this.getDataOfCurrency();
    this.getDataOfName();
  }

  getDataOfCurrency(){
    this.api.getDataOfCurrency((this.idACT.valueOf())).subscribe(res => {
      console.log(res);
      this.dataCurrency = res;
    })
  }

  getDataOfName(){
    this.api.getDataOfName((this.idACT.valueOf())).subscribe(res => {
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

