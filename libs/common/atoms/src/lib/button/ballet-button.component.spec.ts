import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalletButtonComponent } from './ballet-button.component';

describe('BulmaButtonComponent', () => {
  let component: BalletButtonComponent;
  let fixture: ComponentFixture<BalletButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalletButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalletButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
