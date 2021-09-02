import { async, TestBed } from '@angular/core/testing';
import { MoleculesModule } from './molecules.module';

describe('MoleculesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MoleculesModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(MoleculesModule).toBeDefined();
  });
});
