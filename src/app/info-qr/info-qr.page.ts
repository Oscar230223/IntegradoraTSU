import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-qr',
  templateUrl: './info-qr.page.html',
  styleUrls: ['./info-qr.page.scss'],
})
export class InfoQRPage implements OnInit {

    // https://www.npmjs.com/package/angularx-qrcode
    qrUser = "Hola Mi amor"
    Hola = this.qrUser;
    scannedResult: any;
    content_visibility = '';

  constructor() { }

  startScan(){}

  ngOnInit() {
  }

}
