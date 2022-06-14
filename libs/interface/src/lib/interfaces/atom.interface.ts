import { EventEmitter } from "@angular/core";

export declare type ClickFn = (...args: any[]) => void;

export interface Atom {
  id: string;
  isDisable?: boolean;
  options?: AtomOption;
  optionsChange?: EventEmitter<AtomOption>;
  click?: ClickFn;
}

export interface AtomOption {
  value?: Partial<AtomOptions>;
  values?: Partial<AtomOptions>[];
}

export interface AtomOptions {
  value: string;
  text: string;
}

export type CommonComponents = Atom;