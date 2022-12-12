import { Component, OnInit } from '@angular/core';
import {Link} from "../../../shared/model/link.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listeLien : Link[] = [
    {title: "Liste des utilisateurs", url: "user-list"},
    {title: "Mon profil", url: "user-profil"},
    {title: "Inscription", url: "user-subscribe"},
    {title: "Connexion", url: "user-connection"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
