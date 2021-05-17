import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { InfouserComponent } from './infouser/infouser.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: ':idU/infouser', component: InfouserComponent},
  { path: 'login', component: LoginComponent},
  { path: ':idP/comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
