import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Atom } from "../factory/atom.factory";
import { SelectInterface } from "@ballet/interfaces";

@Component({
  selector: 'ballet-button',
  templateUrl: './ballet-button.component.html',
  styleUrls: ['./ballet-button.component.scss']
})
export class BalletButtonComponent implements Atom {
  id: string;
  @Input() isDisable: false;
  @Input() options: SelectInterface[];
  @Output() optionsChange = new EventEmitter<SelectInterface>();

  click(): void {
    console.log('Button');
  }
}
