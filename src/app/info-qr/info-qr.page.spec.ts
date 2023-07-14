import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoQRPage } from './info-qr.page';

describe('InfoQRPage', () => {
  let component: InfoQRPage;
  let fixture: ComponentFixture<InfoQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
