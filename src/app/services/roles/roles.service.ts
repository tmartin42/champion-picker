import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private db: AngularFireDatabase) { }

  getRoles() {
    return this.db.list('/roles').valueChanges();
  }

  addRole(role: Role) {
    return this.db.list('/roles').push(role);
  }
}
