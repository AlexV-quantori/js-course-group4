import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegListComponent } from './reg-list.component';

describe('RegListComponent', () => {
  let component: RegListComponent;
  let fixture: ComponentFixture<RegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
