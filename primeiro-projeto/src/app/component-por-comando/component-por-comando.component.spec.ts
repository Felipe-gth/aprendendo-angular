import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPorComandoComponent } from './component-por-comando.component';

describe('ComponentPorComandoComponent', () => {
  let component: ComponentPorComandoComponent;
  let fixture: ComponentFixture<ComponentPorComandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPorComandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPorComandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
