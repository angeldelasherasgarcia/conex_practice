import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelatedComponent } from './list-related.component';

describe('ListRelatedComponent', () => {
  let component: ListRelatedComponent;
  let fixture: ComponentFixture<ListRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
