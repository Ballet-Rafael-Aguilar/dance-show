import { BalletSelectComponent } from "../select/ballet-select.component";
import { BalletButtonComponent } from "../button/ballet-button.component";
import { SelectInterface } from "@ballet/interfaces";
import { EventEmitter } from "@angular/core";

export const products = {
  select: BalletSelectComponent,
  button: BalletButtonComponent
} as const;

export type AtomType = keyof typeof products;

export interface Atom {
  id: string;
  isDisable: boolean;
  options: SelectInterface[];
  optionsChange: EventEmitter<SelectInterface>;
  click($event?): void;
}