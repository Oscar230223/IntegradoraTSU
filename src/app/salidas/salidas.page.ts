import { Component, OnInit } from '@angular/core';
import { RFID } from 'src/app/models/RFID';
import { RFIDService } from 'src/app/services/rfid.service';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage implements OnInit {
  curpInput: string = '';
  listaRFID: RFID[] = [];
  kid = {}


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
  buscarPorCurp() {
    if (this.curpInput) {
      this._rfidService.obtenerKid(this.curpInput).subscribe(
        data => {
          console.log(data);
          this.kid = data;
        }, 
        error => {
          console.log(error);
          this.kid = null; // Restablece los datos si hay un error
        }
      );
    } else {
      this.kid = null; // Restablece los datos si no se ha ingresado CURP
    }
  }


  obtenersKid(CURP: string){
    const curp = 'curp';
    this._rfidService.obtenerKid(curp).subscribe(
      data => {
        console.log(data);
        this.kid = data;
      }, 
      error => {
        console.log(error);
      }
    );
  }

}
