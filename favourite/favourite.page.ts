import { Component, ViewChild, Injectable } from '@angular/core';
import { Item, StorageService } from '../../services/storage.service';
import { Platform, IonList, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favourite',
  templateUrl: 'favourite.page.html',
  styleUrls: ['favourite.page.scss']
})

@Injectable()
export class FavouritePage {

  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toasController: ToastController, private router: Router) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  goToActual() {
    this.router.navigate(['./tabs/actual'])
  }

  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
      console.log(items)
    });
  }

  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }
  async showToast(msg) {
    const toast = await this.toasController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
}
