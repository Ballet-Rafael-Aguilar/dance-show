import { Component, Input, OnInit } from '@angular/core';
import { ToolbarInterface } from '../../interfaces/toolbar.interface';

@Component({
  selector: 'ballet-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss']
})
export class MatToolbarComponent implements OnInit {

  @Input('config') config: ToolbarInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
