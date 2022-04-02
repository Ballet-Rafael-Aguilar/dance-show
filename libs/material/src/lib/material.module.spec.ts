import { async, TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(MaterialModule).toBeDefined();
  });
});
