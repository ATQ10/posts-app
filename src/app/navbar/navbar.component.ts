import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  entrarO:any;
  salirO:any;

  constructor(private router: Router,
    private SessionService: SessionService) { }

  ngOnInit(): void {
    if(this.SessionService.estaDentro()){
      this.entrarO=false;
      this.salirO=true;
    }else{
      this.entrarO=true;
      this.salirO=false;
    }
  }

  verPosts() {
    this.isMenuCollapsed = true;
    this.router.navigate([""]);
  }

  verLogin() {
    this.isMenuCollapsed = true;
    this.router.navigate(["login"]);
  }

  salir() {
    if(this.SessionService.estaDentro()){
      alert("Sesión finalizada");
      this.SessionService.salir();
    }
    window.location.reload();
  }
}
