import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstanceComponent } from './app-instance.component';

describe('AppInstanceComponent', () => {
  let component: AppInstanceComponent;
  let fixture: ComponentFixture<AppInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
