import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
     public authService:AutheticationService, public router: Router) {}

  ngOnInit() {
    
//Se manda a llamar lo que es formulario de html para el registro
//Validaciones para el email y para la contraseña (Que es lo que requerimos)
    this.formularioRegistro = this.formBuilder.group({
      email :['',[
        Validators.required,
      Validators.email,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password : ['',[
       Validators.required]],
       pass : ['',[
       Validators.required]],
    }, {
      validator: this.passwordMatchValidator // Agregamos la validación personalizada
    });

  }

  //Para autenticar los campos del registro, solamente tenemos dos campos
  //Si valida la autenticacion mandara a la pestaña anterior de la pestaña registro
  get errorControl(){
    return this.formularioRegistro?.controls;
  }
  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if(this.formularioRegistro?.valid){
      const user = await this.authService.registerUser(this.formularioRegistro.value.email,
        this.formularioRegistro.value.password).catch((error)=>{
          console.log(error);
          loading.dismiss()
        });

        if(user){
          loading.dismiss()
          this.router.navigate(['/listar-rfid'])
        }
        else{
          console.log('provde correct');
        }
        
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('pass')?.value;
    if (password !== confirmPassword) {
      control.get('pass')?.setErrors({ passwordMismatch: true});

    }
    else{
      control.get('pass')?.setErrors(null);
    }
  }

}
