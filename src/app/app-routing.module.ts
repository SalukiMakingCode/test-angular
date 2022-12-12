import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserConnectionComponent} from "./components/user/user-connection/user-connection.component";
import {UserProfilComponent} from "./components/user/user-profil/user-profil.component";
import {UserSubscribeComponent} from "./components/user/user-subscribe/user-subscribe.component";

const routes: Routes = [
  {path: "user-list", component: UserListComponent},
  {path: "user-connection", component: UserConnectionComponent},
  {path: "user-profil", component: UserProfilComponent},
  {path: "user-subscribe", component: UserSubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
