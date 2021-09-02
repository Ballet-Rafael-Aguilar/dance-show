import { Component, Input, OnInit } from '@angular/core';
import { ToolbarInterface } from '@ballet/interfaces';

@Component({
  selector: 'ballet-toolbar',
  templateUrl: './ballet-toolbar.component.html',
  styleUrls: ['./ballet-toolbar.component.scss']
})
export class BalletToolbarComponent implements OnInit {

  @Input('config') config: ToolbarInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
