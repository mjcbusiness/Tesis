import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info-puntual',
  templateUrl: './card-info-puntual.component.html',
  styleUrls: ['./card-info-puntual.component.css']
})
export class CardInfoPuntualComponent implements OnInit {
  @Input() parametroLabel!:String;
  @Input() valorParametro!:number | String;
  constructor() { }

  ngOnInit(): void {
  }

}
