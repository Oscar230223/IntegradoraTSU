import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public formBuilder: FormBuilder,public loadingCtrl: LoadingController,
    public authService:AutheticationService, public router: Router){}

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      email :['',[
        Validators.required,
      Validators.email,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]],
      password : ['', 
      Validators.required]
    })
  }
  get errorControl(){
    return this.formularioLogin?.controls;
  }
  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.formularioLogin?.valid){
      const user = await this.authService.loginUser(this.formularioLogin.value.email,
        this.formularioLogin.value.password).catch((error)=>{
          console.log(error);
          loading.dismiss()
        })
        if(user){
          loading.dismiss()
          //this.router.navigate(['/tab1'])
        }
        if(this.formularioLogin.value.email === 'admin@utcj.edu.mx'){
          this.router.navigate(['/listar-rfid']);
        }
        else{
          this.router.navigate(['/tab1']);
        }
      }
        else{
          console.log('provde correct');
        }
        
    }
  }
  

