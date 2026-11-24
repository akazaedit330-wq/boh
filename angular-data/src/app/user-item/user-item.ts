import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-item',
  styleUrl: './user-item.css',
  templateUrl: './user-item.html',
})
export class UserItem {
  name: string;          // <-- la proprietà name
  constructor() {
    this.name = 'Felipe'; // la imposta nel costruttore
    console.log('creato', this.name);
  }
}
