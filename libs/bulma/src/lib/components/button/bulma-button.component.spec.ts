import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaButtonComponent } from './bulma-button.component';

describe('ButtonComponent', () => {
  let component: BulmaButtonComponent;
  let fixture: ComponentFixture<BulmaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulmaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
