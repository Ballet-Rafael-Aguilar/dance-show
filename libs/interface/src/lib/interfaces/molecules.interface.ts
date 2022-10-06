import { Atom } from "@ballet/interfaces";

export interface Molecule {
  id: string;
  atoms?: Atom[]
}

export type CommonComponents = Molecule;