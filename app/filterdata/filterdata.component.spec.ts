import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdataComponent } from './filterdata.component';

describe('FilterdataComponent', () => {
  let component: FilterdataComponent;
  let fixture: ComponentFixture<FilterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
