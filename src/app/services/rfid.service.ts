import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RFID } from '../models/RFID';

@Injectable({
  providedIn: 'root'
})
export class RFIDService {
  url = 'http://localhost:4000/api/RFID';

  constructor(private http: HttpClient) { }

  getRFID(): Observable<RFID[]> {
    return this.http.get<RFID[]>(this.url);
  }

  GuardarProducto(RFID: {}): Observable <any> {
    return this.http.post(this.url, RFID)
  }

  ObtenerRFID(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }
  EditarRFID(id: string, rfid: RFID): Observable <any> {
    return this.http.put(this.url + id, rfid);
  }
}
