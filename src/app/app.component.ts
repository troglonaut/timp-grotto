import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
@Component({
  selector: 'tg-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timp-grotto'
  trips: Observable<any[]>
  constructor (
    db: AngularFirestore
  ) {
    this.trips = db.collection('trips').valueChanges()
  }
}
