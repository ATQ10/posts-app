import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../models/comentario';
import { Post } from '../models/post';
import { Usuario } from '../models/usuario';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  idPost:any;
  Ncomentarios:any=0;
  constructor(private router: Router,
    private RestService:RestService,
    private activedRoute: ActivatedRoute) { 
      this.idPost = this.activedRoute.snapshot.params.idP;
    }

  public posts:any = [];
  public usuarios:any = [];
  public comentarios:any = [];

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
      .obtenerComentarios(this.idPost)
      .subscribe(
        (comentariosDelApi: Comentario[]) => this.comentarios = comentariosDelApi,
        error => console.error(error)
      );
      this.RestService
      .obtenerComentarios(this.idPost)
      .subscribe(
        (comentariosDelApi: Comentario[]) => this.Ncomentarios = comentariosDelApi.length,
        error => console.error(error)
      );
  }

 /* cargarData(): void{
    this.RestService.obtenerPosts()
    .subscribe(respuesta1 =>
      this.posts = respuesta1);
    this.RestService.obtenerUsuarios()
    .subscribe(respuesta2 =>
      this.usuarios = respuesta2);
  }
  filtrarData(): void{
   
    //Filtrar información de post
    var idPost=this.idPost; 
    var postActual:any;
    this.posts.forEach(function (post:any) {
      if(post.id == idPost){
        postActual = post;
      }
    });
    this.post = postActual;

    //Filtrar información de usuario
    var idUser=this.posts.userId;
    var userActual:any;
    this.usuarios.forEach(function (user:any) {
      if(user.id == idUser){
        userActual = user;
      }
    });
    this.usuario = userActual;
    */
  //}

  
  
  verUsuario(idUser: number) {
    this.router.navigate([idUser,"infouser"]);
  }

  verComentarios(idPost: number) {
    this.router.navigate([idPost,"comments"]);
  }
  verPosts() {
    this.router.navigate([""]);
  }


}
