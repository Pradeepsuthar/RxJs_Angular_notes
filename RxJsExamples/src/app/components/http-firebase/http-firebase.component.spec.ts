import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFirebaseComponent } from './http-firebase.component';

describe('HttpFirebaseComponent', () => {
  let component: HttpFirebaseComponent;
  let fixture: ComponentFixture<HttpFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
