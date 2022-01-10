import { ActionFn } from './action.interface';
import { SelectInterface } from "./select.interface";

export interface ToolbarInterface {
  toggleMenu?: ActionFn;
  themeSelect: SelectInterface[];
  themeSelected: SelectInterface;
}
