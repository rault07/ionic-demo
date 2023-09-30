import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storageService: StorageService) {}

  get results(): Results[] {
    return this.storageService.GetLocalResults;
  }
  

}
