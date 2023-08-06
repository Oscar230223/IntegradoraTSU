import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-rfid',
  templateUrl: './crear-rfid.component.html',
  styleUrls: ['./crear-rfid.component.scss'],
})
export class CrearRfidComponent  implements OnInit {
  RFIDForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.RFIDForm = this.fb.group({
      NombreNiño: ['', Validators.required],
      Salon: ['', Validators.required],
      NombrePadre: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  agregarRFID(){
    console.log(this.RFIDForm)
    
  }

}
