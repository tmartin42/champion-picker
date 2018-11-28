import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { ModalRoleComponent } from './ui-components/modal-role/modal-role.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleEditComponent } from './ui-components/role-edit/role-edit.component';
import { ChampionsPopupComponent } from './ui-components/champions-popup/champions-popup.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FirebaseService } from './services/firebase/firebase.service';
import { AuthService } from './services/firebase/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalRoleComponent,
    RoleEditComponent,
    ChampionsPopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    FirebaseService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
