import { Atom } from "@ballet/interfaces";
import { Molecule } from "./molecules.interface";

export interface Catalog {
  id: string;
  isDisable?: boolean;
  components: Atom | Molecule []
}

export type CommonCatalog = Catalog;