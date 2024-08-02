import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-logo',
  templateUrl: './button-logo.component.html',
  styleUrls: ['./button-logo.component.css']
})
export class ButtonLogoComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  clickButton(){
    this.buttonClick.emit();
  }
}
