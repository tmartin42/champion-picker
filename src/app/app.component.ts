import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Role } from './models/role';
import { ChampionsService } from './services/champions/champions.service';
import { RolesService } from './services/roles/roles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'champion-picker';

  roles: any[];
  champions: any;

  modalOpen: boolean;

  constructor (private championsService: ChampionsService,
              private rolesService: RolesService) {

  }

  ngOnInit () {
    this.modalOpen = false;
    this.rolesService.getRoles().subscribe(
      res => {
        console.log(res);
        this.roles = res;
      }, err => {
        console.log(err);
      }
    );
    this.championsService.getChampions().subscribe (
      res => {
        this.champions = res;
        console.log(res);
      }, err => {
        console.log(err);
      }
    )
  }

  public addRole(role: Role) {
    console.log(role);
    if (this.roles.length) {
      this.rolesService.addRole(role);
    }
    this.modalOpen = false;
  }

  public openModal() {
    this.modalOpen = true;
  }

  public closeModal() {
    this.modalOpen = false;
  }
}
