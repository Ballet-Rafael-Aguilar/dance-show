import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalletToolbarComponent } from './ballet-toolbar.component';


describe('BulmaButtonComponent', () => {
  let component: BalletToolbarComponent;
  let fixture: ComponentFixture<BalletToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalletToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalletToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
