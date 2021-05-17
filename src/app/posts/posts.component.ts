import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { Usuario } from '../models/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts:any = [];
  public usuarios:any = [];
  Nposts:any;

  constructor(private router: Router,
    private RestService:RestService) {}

  ngOnInit(): void {
    this.RestService
      .obtenerUsuarios()
      .subscribe(
        (usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi,
        error => console.error(error)
      );
      this.RestService
        .obtenerPosts()
        .subscribe(
          (postsDelApi: Post[]) => this.posts = postsDelApi,
          error => console.error(error)
        );
        this.RestService
          .obtenerPosts()
          .subscribe(
            (postsDelApi: Post[]) => this.Nposts = postsDelApi.length,
            error => console.error(error)
          );
  }

  verUsuario(idUser: number) {
    this.router.navigate([idUser,"infouser"]);
  }

  verComentarios(idPost: number) {
    this.router.navigate([idPost,"comments"]);
  }

}
