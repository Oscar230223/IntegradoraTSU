import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
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
    this.formularioRegistro = this.formBuilder.group({
      email :['',[
        Validators.required,
      Validators.email,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password : ['',
       Validators.required]
    })
  }
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
        })
        if(user){
          loading.dismiss()
          this.router.navigate(['/tab3'])
        }
        else{
          console.log('provde correct');
        }
        
    }
  }
  
}
