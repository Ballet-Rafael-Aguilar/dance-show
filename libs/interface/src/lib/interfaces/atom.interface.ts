import { EventEmitter } from "@angular/core";

export declare type ClickFn = ($event?) => void;

export interface Atom {
  id: string;
  isDisable: boolean;
  option?: AtomOption;
  options?: AtomOption[];
  optionsChange: EventEmitter<AtomOption>;
  click: ClickFn;
}

export interface AtomOptions {
  value;
  text: string;
  click?: ClickFn;
}

export type AtomOption = Partial<AtomOptions>;