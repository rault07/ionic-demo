import { Component, Input, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  implements OnInit {

  @Input() result!: Results;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {}

}
