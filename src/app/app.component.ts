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
  version: string;
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
    this.championsService.getVersion().subscribe (
      versionRes => {
        this.version = versionRes;
        this.championsService.getChampions(versionRes.n.champion).subscribe (
        res => {
          this.champions = res;
          console.log(res);
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      }
    );

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

  public onItemDrop(e, roleId, categoryId) {
   console.log(e);
   let champion = {name: e.dragData.key, img: "placeholder"};
   console.log(this.roles[roleId].categories[categoryId]);
   if (!this.roles[roleId].categories[categoryId].champions) {
      this.roles[roleId].categories[categoryId].champions = [];
   }
    this.roles[roleId].categories[categoryId].champions.push(champion);
    // this.rolesService.addChampion()
  }
}
