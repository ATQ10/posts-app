import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Post } from 'src/app/models/post';
import { Comentario } from 'src/app/models/comentario';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseURLUsers = environment.apiURL + 'users/';
  baseURLPosts = environment.apiURL + 'posts/';
 
  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURLUsers);
  }

  obtenerUsuario(id: string): Observable<Usuario[]> {
    const url = `${this.baseURLUsers}?id=${id}`;
    return this.http.get<Usuario[]>(url);
  }
 
  obtenerPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURLPosts);
  }

  obtenerPost(id: string): Observable<Post[]> {
    const url = `${this.baseURLPosts}?id=${id}`;
    return this.http.get<Post[]>(url);
  }
 
  obtenerPostsPorUsuario(id: string): Observable<Post[]> {
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }
 
  obtenerComentarios(id: string): Observable<Comentario[]> {
    const url = this.baseURLPosts+id+'/comments/';
    return this.http.get<Comentario[]>(url);
  }
}
