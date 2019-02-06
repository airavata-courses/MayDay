import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  dataStore: Observable<any>
  dataEmitter: any;
  constructor() {
    this.cleanData();
  }
  storeData(dataObservable: Observable<any>) {
    dataObservable.subscribe((data) => {
      this.dataEmitter.next(data);
    });
  }

  getData(): Observable<any> {
    return this.dataStore
  }

  cleanData() {
    this.dataStore = Observable.create((e: any) => this.dataEmitter = e);
  }
}
