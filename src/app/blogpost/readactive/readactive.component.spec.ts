import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadactiveComponent } from './readactive.component';

describe('ReadactiveComponent', () => {
  let component: ReadactiveComponent;
  let fixture: ComponentFixture<ReadactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
