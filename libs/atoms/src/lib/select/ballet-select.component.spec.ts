import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalletSelectComponent } from './ballet-select.component';

describe('SelectComponent', () => {
  let component: BalletSelectComponent;
  let fixture: ComponentFixture<BalletSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalletSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalletSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
