import { BalletSelectComponent } from "../select/ballet-select.component";
import { BalletButtonComponent } from "../button/ballet-button.component";

export const products = {
  select: BalletSelectComponent,
  button: BalletButtonComponent
} as const;

export type AtomType = keyof typeof products;
