import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Role } from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'champion-picker';

  roles: any[];

  modalOpen: boolean;

  constructor (private db: AngularFireDatabase) {

  }

  ngOnInit () {
    this.modalOpen = false;
    this.db.list('/roles').valueChanges().subscribe(
      res => {
        console.log(res);
        this.roles = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  public addRole(role: Role) {
    console.log(role);
    if (this.roles.length) {
      this.db.list('/roles').push(role);
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
