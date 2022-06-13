import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2chartTimeofdayComponent } from './ng2chart-timeofday.component';

describe('Ng2chartTimeofdayComponent', () => {
  let component: Ng2chartTimeofdayComponent;
  let fixture: ComponentFixture<Ng2chartTimeofdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2chartTimeofdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2chartTimeofdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
