import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstanceHeaderComponent } from './app-instance-header.component';

describe('AppIntanceHeaderComponent', () => {
  let component: AppInstanceHeaderComponent;
  let fixture: ComponentFixture<AppInstanceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInstanceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstanceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
