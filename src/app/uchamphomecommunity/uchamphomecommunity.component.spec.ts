import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UchamphomecommunityComponent } from './uchamphomecommunity.component';

describe('UchamphomecommunityComponent', () => {
  let component: UchamphomecommunityComponent;
  let fixture: ComponentFixture<UchamphomecommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UchamphomecommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UchamphomecommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
