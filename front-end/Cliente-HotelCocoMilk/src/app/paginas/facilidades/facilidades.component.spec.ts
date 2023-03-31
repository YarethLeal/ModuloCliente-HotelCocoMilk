import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilidadesComponent } from './facilidades.component';

describe('FacilidadesComponent', () => {
  let component: FacilidadesComponent;
  let fixture: ComponentFixture<FacilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
