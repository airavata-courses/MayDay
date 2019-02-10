import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  dataStore: Observable<any>;
  dataEmitter: any;
  searchParams: Observable<any>;
  paramEmitter: any;
  constructor() {
    this.cleanData();
  }
  storeData(dataObservable: Observable<any>) {
    dataObservable.subscribe((data) => {
      this.dataEmitter.next(data);
    });
  }

  getData(): Observable<any> {
    return this.dataStore;
  }

  setSearchParameters(searchParams: any) {
    this.searchParams = searchParams;
    this.paramEmitter.next(searchParams);
  }
  getSearchParams(): Observable<any> {
    return this.searchParams;
  }

  cleanData() {
    this.dataStore = Observable.create((e: any) => this.dataEmitter = e);
    this.searchParams = Observable.create((e: any) => this.paramEmitter = e);
    this.dataStore.subscribe();
    this.searchParams.subscribe();
  }
}
