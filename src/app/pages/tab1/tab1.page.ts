import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces';
import { RickService } from 'src/app/services/rick.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public results: Results[] = [];

  constructor(
    private rickService: RickService
  ) {}

  ngOnInit(): void {
    
    this.rickService.getListApi()
      .subscribe( results => this.results.push( ...results ) );
  }

}
