import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RFID } from 'src/app/models/RFID';
import { RFIDService } from 'src/app/services/rfid.service';

@Component({
  selector: 'app-crear-rfid',
  templateUrl: './crear-rfid.component.html',
  styleUrls: ['./crear-rfid.component.scss'],
})
export class CrearRfidComponent implements OnInit {
  RFIDForm: FormGroup;
  titulo = 'Crear RFID';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _RFIDService: RFIDService,
    private aRouter: ActivatedRoute
  ) {
    this.RFIDForm = this.fb.group({
      Nino: ['', Validators.required],
      Salon: ['', Validators.required],
      Padre: ['', Validators.required],
      Mama: ['', Validators.required],
      NumeroT: ['', Validators.required],
      NombrePExterna: ['', Validators.required],
      CURP: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.esEditar();
  }

agregarRFID(Nino:any, Salon:any, Padre:any, NumeroT:any, NombrePExterna: any, CURP: any, Mama: any) {
  if (this.RFIDForm.valid) {
    console.log('Formulario válido:', this.RFIDForm.value);
    let rfid = {
      NombreNino: Nino.value,
      Salon: Salon.value,
      NombrePadre: Padre.value,
      NombreMama: Mama.value,
      NumeroT: NumeroT.value,
      NombrePExterna: NombrePExterna.value,
      CURP: CURP.value
    }

    if(this.id !== null){

    }else{
      
    }

    console.log('Datos a enviar:', rfid);
    this._RFIDService.GuardarProducto(rfid).subscribe(
      data => {
        console.log('Respuesta del servidor:', data);
        this.toastr.success('El RFID fue registrado con éxito!', 'RFID Registrado');
        this.router.navigate(['/']);
  
      },
      error => {
        console.error('Error en la solicitud:', error);
        this.RFIDForm.reset();
      }
    );
  } else {
    this.toastr.error('Por favor complete todos los campos requeridos.', 'Error de Validación');
  }
}


  esEditar() {

    if(this.id !== null) {
      this._RFIDService.ObtenerRFID(this.id).subscribe(data => {
        this.RFIDForm.setValue({
          Nino: data.NombreNino,
          Salon: data.Salon,
          Padre: data.NombrePadre,
          Mama: data.NombreMama,
          NumeroT: data.NumeroT,
          NombrePExterna: data.NombrePExterna,
          CURP: data.CURP
        })
      })
    }
  }
}
