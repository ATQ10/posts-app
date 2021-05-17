import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //NOTA: Con fines ilustrativos se simula un inicio de sesión
  CE:String = "delauaa@sithec.com.mx";
  PASS:String = "sithec12345";

  private usuarios:any = [];
  //Correo electronico
  email: String = "";
  //Contraseña
  password: String = "";
  
  constructor(private RestService:RestService,
    private SessionService: SessionService,
    private router: Router) {
     }

  routeRedirect = '';

  login() {
    this.SessionService.iniciar();
  }

  ngOnInit(): void {
    if(this.SessionService.estaDentro()){
      this.router.navigate([""]);
    }
  }

  validarUsuario(): void{
    if(this.email=="" || this.password==""){
      alert("Complete los campos");
      return;
    }
    if(this.email==this.CE){
      if(this.PASS==this.password){
        alert("Acceso exitoso");
        this.login();
        this.password="";
        this.email="";
        window.location.reload();
      }else{
        alert("Contraseña incorrecta");
      }
    }else{
      alert("Este usuario no existe");
    }
  }

}