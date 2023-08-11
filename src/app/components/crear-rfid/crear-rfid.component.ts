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
      NombreNiño: ['', Validators.required],
      Salon: ['', Validators.required],
      NombrePadre: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.esEditar();
  }

agregarRFID(nameKid:any, classroom:any, nameDad:any) {
  if (this.RFIDForm.valid) {
    console.log('Formulario válido:', this.RFIDForm.value);
    let rfid = {
      NombreNino: nameKid.value,
      Salon: classroom.value,
      NombrePadre: nameDad.value
    };

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
    // Agrega aquí el código necesario si estás editando un RFID existente.
  }
}
