import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { TGAppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TGCommonModule } from './common/common.module'
import { JoinComponent } from './join/join.component'
import { JoinFormComponent } from './join/components/join-form/join-form.component'



@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    JoinFormComponent
  ],
  imports: [
    BrowserModule,
    TGAppRoutingModule,
    TGCommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'timp-grotto'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
