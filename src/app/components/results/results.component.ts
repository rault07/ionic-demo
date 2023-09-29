import { Component, Input, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent  implements OnInit {

  @Input() results: Results[] = [];

  constructor() { }

  ngOnInit() {}

}
