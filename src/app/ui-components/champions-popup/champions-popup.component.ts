import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-champions-popup',
  templateUrl: './champions-popup.component.html',
  styleUrls: ['./champions-popup.component.css']
})
export class ChampionsPopupComponent implements OnInit {

  @Input() champions: any;
  @Input() version: any;
  public opened: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.champions);
  }


}
