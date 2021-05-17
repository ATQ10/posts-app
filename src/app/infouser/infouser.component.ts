import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { Usuario } from '../models/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
  idUser:any;  
  public posts:any = [];
  public usuarios:any = [];
  Nposts:any;
  constructor(private router: Router,
    private RestService:RestService,
    private activedRoute: ActivatedRoute) { 
    this.idUser = this.activedRoute.snapshot.params.idU;
  }
  ngOnInit(): void {
    this.RestService
      .obtenerUsuarios()
      .subscribe(
        (usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi,
        error => console.error(error)
      );
    this.RestService
      .obtenerPostsPorUsuario(this.idUser)
      .subscribe(
        (postsDelApi: Post[]) => this.posts = postsDelApi,
        error => console.error(error)
      );
    this.RestService
    .obtenerPostsPorUsuario(this.idUser)
    .subscribe(
      (postsDelApi: Post[]) => this.Nposts = postsDelApi.length,
      error => console.error(error)
    );
  }

  verComentarios(idPost: number) {
    this.router.navigate([idPost,"comments"]);
  }
  
  verPosts() {
    this.router.navigate([""]);
  }
}
