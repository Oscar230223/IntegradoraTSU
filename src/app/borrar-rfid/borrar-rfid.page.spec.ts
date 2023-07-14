import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrarRFIDPage } from './borrar-rfid.page';

describe('BorrarRFIDPage', () => {
  let component: BorrarRFIDPage;
  let fixture: ComponentFixture<BorrarRFIDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorrarRFIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
