import { Component } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  model: Kitten = new Kitten("", "", new Date(), "",);

  onSubmit() {
    console.log(this.model)
  }
}
