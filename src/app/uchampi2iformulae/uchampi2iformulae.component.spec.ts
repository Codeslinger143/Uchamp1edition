import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uchampi2iformulaeComponent } from './uchampi2iformulae.component';

describe('Uchampi2iformulaeComponent', () => {
  let component: Uchampi2iformulaeComponent;
  let fixture: ComponentFixture<Uchampi2iformulaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uchampi2iformulaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Uchampi2iformulaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
