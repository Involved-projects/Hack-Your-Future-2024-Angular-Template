import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, TodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
