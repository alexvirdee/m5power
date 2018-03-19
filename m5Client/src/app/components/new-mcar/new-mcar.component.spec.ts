import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMcarComponent } from './new-mcar.component';

describe('NewMcarComponent', () => {
  let component: NewMcarComponent;
  let fixture: ComponentFixture<NewMcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
