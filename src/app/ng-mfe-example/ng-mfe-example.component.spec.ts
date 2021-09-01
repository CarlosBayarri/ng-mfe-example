import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMfeExampleComponent } from './ng-mfe-example.component';

describe('NgMfeExampleComponent', () => {
  let component: NgMfeExampleComponent;
  let fixture: ComponentFixture<NgMfeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMfeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMfeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
