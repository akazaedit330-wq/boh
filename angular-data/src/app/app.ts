import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItem  } from '@useritem/useritem';
import { HelloWorld  } from '@helloworld/helloworld';
@Component({
  imports: [RouterOutlet, UserItem, HelloWorld],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-data');
}
