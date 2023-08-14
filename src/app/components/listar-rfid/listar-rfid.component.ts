import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
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


  EliminarRFID(rfid: any) {
    this._rfidService.EliminarRFID('id').subscribe(data =>{ 
      this.obtenerRFID();
    }, error => {
      console.log(error);
    })
  }
}

