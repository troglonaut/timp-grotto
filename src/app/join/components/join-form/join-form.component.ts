import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component } from '@angular/core'

@Component({
  selector: 'tg-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent {
  joinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor(fb: FormBuilder) { }
}
