import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionShowComponent } from './tvshow.component';

describe('TvshowComponent', () => {
  let component: TelevisionShowComponent;
  let fixture: ComponentFixture<TelevisionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
