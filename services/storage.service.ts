import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

export interface Item {
  id: number;
  title: string;
  price: number;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // Create
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, [item]);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  // Read
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // Delete
  deleteItem(id: number): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length == null) {
        return null;
      }
      let toKeep: Item[] = [];

      for(let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
