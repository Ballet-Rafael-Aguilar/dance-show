import { async, TestBed } from '@angular/core/testing';
import { AtomsModule } from './atoms.module';

describe('AtomsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AtomsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AtomsModule).toBeDefined();
  });
});