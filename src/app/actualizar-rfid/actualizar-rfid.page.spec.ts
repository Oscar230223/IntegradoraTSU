import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarRFIDPage } from './actualizar-rfid.page';

describe('ActualizarRFIDPage', () => {
  let component: ActualizarRFIDPage;
  let fixture: ComponentFixture<ActualizarRFIDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarRFIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
