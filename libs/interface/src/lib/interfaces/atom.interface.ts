import { EventEmitter } from "@angular/core";

export interface Atom {
  id: string;
  isDisable: boolean;
  options: AtomOption[];
  optionsChange: EventEmitter<AtomOption>;
  click?($event?): void;
}

export interface AtomOptions {
  value: unknown;
  text: string;
}

export type AtomOption = Partial<AtomOptions>;