import { EventEmitter } from "@angular/core";

export declare type ClickFn = (...args: any[]) => void;

export interface Atom {
  id: string;
  isDisable?: boolean;
  options?: AtomOption | AtomOption[];
  optionsChange?: EventEmitter<AtomOption>;
  click?: ClickFn;
}

export interface AtomOptions {
  value;
  text: string;
}

export type AtomOption = Partial<AtomOptions>;

export type CommonComponents = Atom;