import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomComponent } from './atom.directive';

describe('AtomComponent', () => {
  let component: AtomComponent;
  let fixture: ComponentFixture<AtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
