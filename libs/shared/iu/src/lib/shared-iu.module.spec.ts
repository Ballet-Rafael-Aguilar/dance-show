import { async, TestBed } from '@angular/core/testing';
import { SharedIuModule } from '@ballet/shared/iu';

describe('SharedIuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedIuModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedIuModule).toBeDefined();
  });
});
