import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPaginator } from './custom-paginator';

describe('CustomPaginator', () => {
  let component: CustomPaginator;
  let fixture: ComponentFixture<CustomPaginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPaginator ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
