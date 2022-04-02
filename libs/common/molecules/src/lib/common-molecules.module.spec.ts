import { async, TestBed } from '@angular/core/testing';
import { CommonMoleculesModule } from './common-common-molecules.module';

describe('CommonMoleculesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMoleculesModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CommonMoleculesModule).toBeDefined();
  });
});
