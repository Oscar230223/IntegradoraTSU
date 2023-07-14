import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaRFIDPage } from './tarjeta-rfid.page';

describe('TarjetaRFIDPage', () => {
  let component: TarjetaRFIDPage;
  let fixture: ComponentFixture<TarjetaRFIDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarjetaRFIDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
