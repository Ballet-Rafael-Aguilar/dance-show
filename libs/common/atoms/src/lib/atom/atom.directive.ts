import { Directive, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Atom } from "@ballet/interfaces";

@Directive({
  selector: '[balletAbstractAtom]',
})
export abstract class AbstractAtomDirective {
  @Input() config$!: Observable<Atom>;
}
