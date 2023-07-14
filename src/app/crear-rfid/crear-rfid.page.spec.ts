import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearRFIDPage } from './crear-rfid.page';

describe('CrearRFIDPage', () => {
  let component: CrearRFIDPage;
  let fixture: ComponentFixture<CrearRFIDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearRFIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
