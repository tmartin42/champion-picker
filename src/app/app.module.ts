import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalRoleComponent } from './ui-components/modal-role/modal-role.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleEditComponent } from './ui-components/role-edit/role-edit.component';
import { ChampionsPopupComponent } from './ui-components/champions-popup/champions-popup.component';

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
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [
              AngularFirestore,
              AngularFireDatabase,
              HttpClient,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
