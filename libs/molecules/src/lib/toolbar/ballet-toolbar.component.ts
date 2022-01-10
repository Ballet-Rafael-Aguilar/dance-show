import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarInterface } from '@ballet/interfaces';

@Component({
  selector: 'ballet-toolbar',
  templateUrl: './ballet-toolbar.component.html',
  styleUrls: ['./ballet-toolbar.component.scss']
})
export class BalletToolbarComponent {
  @Input() config: ToolbarInterface;
  @Output() configChange = new EventEmitter<ToolbarInterface>();

  onThemeChange($event) {
    this.configChange.emit({...this.config, themeSelected: $event})
  }
}
