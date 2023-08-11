import { Component, OnInit } from '@angular/core';
import { RFID } from 'src/app/models/RFID';
import { RFIDService } from 'src/app/services/rfid.service';

@Component({
  selector: 'app-listar-rfid',
  templateUrl: './listar-rfid.component.html',
  styleUrls: ['./listar-rfid.component.scss'],
})
export class ListarRfidComponent implements OnInit {
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


  eliminarRegistro(rfid: any) {

    const index = this.listaRFID.indexOf(rfid);
    if (index !== -1) {
      this.listaRFID.splice(index, 1);
    }
  }

}

