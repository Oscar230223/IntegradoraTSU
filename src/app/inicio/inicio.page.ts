import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const setTime = ()=>{
      setTimeout(() =>{
        console.log("okay");
        this.router.navigate(['/login']);
      },3000);
    }
    console.log("cargando");
    setTime();
  }

}
