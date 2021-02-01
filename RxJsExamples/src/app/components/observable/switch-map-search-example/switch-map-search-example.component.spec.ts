import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapSearchExampleComponent } from './switch-map-search-example.component';

describe('SwitchMapSearchExampleComponent', () => {
  let component: SwitchMapSearchExampleComponent;
  let fixture: ComponentFixture<SwitchMapSearchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapSearchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapSearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
