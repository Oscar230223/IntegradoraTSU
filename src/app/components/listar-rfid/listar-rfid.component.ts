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

  EliminarRFID(id: number) {
    this._rfidService.EliminarRFID(id.toString()).subscribe(
      () => {
        console.log('RFID eliminado con éxito');
        // Vuelve a obtener la lista actualizada después de eliminar
        this.obtenerRFID();
      },
      error => {
        console.error('Error al eliminar RFID:', error);
      }
    );
  }
}
