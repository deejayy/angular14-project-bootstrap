import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialShowcaseComponent } from './material-showcase.component';

describe('MaterialShowcaseComponent', () => {
  let component: MaterialShowcaseComponent;
  let fixture: ComponentFixture<MaterialShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
