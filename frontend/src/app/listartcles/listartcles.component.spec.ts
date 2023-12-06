import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartclesComponent } from './listartcles.component';

describe('ListartclesComponent', () => {
  let component: ListartclesComponent;
  let fixture: ComponentFixture<ListartclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListartclesComponent]
    });
    fixture = TestBed.createComponent(ListartclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
