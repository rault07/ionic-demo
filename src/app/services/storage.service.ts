import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Results } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localResults: Results[] = [];

  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    this.loadResults();
  }

  async saveRemoveResult( result: Results ) {
    
    const exists = this._localResults.find( localResult => localResult.name === result.name);

    if(exists) {

      this._localResults = this._localResults.filter( localResult => localResult.name !== result.name )
    } else {

      this._localResults = [ result, ...this._localResults ];
    }

    this._storage?.set('results', this._localResults);
  }

  async loadResults() {

    try {

      const results = await this._storage?.get('results');
      this._localResults = results || [];

    } catch (error) {
    }
  }

  get GetLocalResults() {

    return [...this._localResults];
  }

  resultOrFAvorites( result: Results ) {

    return !!this._localResults.find(localResult => localResult.name === result.name)
  }


}
