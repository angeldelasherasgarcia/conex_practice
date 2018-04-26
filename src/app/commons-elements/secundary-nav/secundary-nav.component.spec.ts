import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryNavComponent } from './secundary-nav.component';

describe('SecundaryNavComponent', () => {
  let component: SecundaryNavComponent;
  let fixture: ComponentFixture<SecundaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecundaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
