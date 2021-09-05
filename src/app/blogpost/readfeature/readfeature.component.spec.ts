import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfeatureComponent } from './readfeature.component';

describe('ReadfeatureComponent', () => {
  let component: ReadfeatureComponent;
  let fixture: ComponentFixture<ReadfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
