import { Component, OnInit } from '@angular/core';
import { RFID } from 'src/app/models/RFID';
import { RFIDService } from 'src/app/services/rfid.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  listaRFID: RFID[] = [];

  constructor(private _rfidService: RFIDService) { }

  ngOnInit(): void {
    this.obtenerRFID();
  }

  obtenerRFID() {
    this._rfidService.getRFID().subscribe(
      data => {
        console.log(data);
        this.listaRFID = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}