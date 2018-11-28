import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase/app';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  public getAuth(): Observable<User|null> {
    return this.afAuth.user;
  }

  public login() {
    console.log("HERE");
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public signout(): void {
    this.afAuth.auth.signOut().catch((err: Error) => console.error(err));
  }
}
