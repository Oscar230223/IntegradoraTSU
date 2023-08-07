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
    this.esEditar()
  }

  agregarRFID() {
    console.log(this.RFIDForm.value);

    console.log(this.RFIDForm.get('NombreNiño').value);

    const rfid: RFID = {
      niño: this.RFIDForm.get('NombreNiño')?.value,
      salon: this.RFIDForm.get('Salon')?.value,
      padre: this.RFIDForm.get('NombrePadre')?.value,
    }

    console.log(rfid);
    this._RFIDService.GuardarProducto(rfid).subscribe(
      data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado');
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        this.RFIDForm.reset();
      }
    );
  }

  esEditar() {

  }

}
