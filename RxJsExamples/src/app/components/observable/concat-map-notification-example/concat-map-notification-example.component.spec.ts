import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapNotificationExampleComponent } from './concat-map-notification-example.component';

describe('ConcatMapNotificationExampleComponent', () => {
  let component: ConcatMapNotificationExampleComponent;
  let fixture: ComponentFixture<ConcatMapNotificationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatMapNotificationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapNotificationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
