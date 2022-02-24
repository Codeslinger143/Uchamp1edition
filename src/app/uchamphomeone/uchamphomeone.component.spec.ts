import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchamphomeoneComponent } from './uchamphomeone.component';

describe('UchamphomeoneComponent', () => {
  let component: UchamphomeoneComponent;
  let fixture: ComponentFixture<UchamphomeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchamphomeoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchamphomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
