import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInstanceContainerComponent } from './app-instance-container.component';

describe('AppInstanceContainerComponent', () => {
  let component: AppInstanceContainerComponent;
  let fixture: ComponentFixture<AppInstanceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInstanceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInstanceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
