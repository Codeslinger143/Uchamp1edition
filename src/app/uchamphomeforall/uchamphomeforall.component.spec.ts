import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchamphomeforallComponent } from './uchamphomeforall.component';

describe('UchamphomeforallComponent', () => {
  let component: UchamphomeforallComponent;
  let fixture: ComponentFixture<UchamphomeforallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchamphomeforallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchamphomeforallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
