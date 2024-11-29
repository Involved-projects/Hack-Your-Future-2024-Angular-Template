import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HackYourFutureTemplate';

  counter = 0;

  increment() {
    this.counter++;
  }

  name = "Initial name";

  items: string[] = [];

  addItem() {
    this.items.push(this.name);
  }
}
