import { Component, Input } from '@angular/core';
import { ToolbarInterface } from '@ballet/interfaces';

@Component({
  selector: 'ballet-toolbar',
  templateUrl: './ballet-toolbar.component.html',
  styleUrls: ['./ballet-toolbar.component.scss']
})
export class BalletToolbarComponent {
  @Input() config: ToolbarInterface;
}
