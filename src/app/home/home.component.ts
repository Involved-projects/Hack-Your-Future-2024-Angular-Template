import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, TodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dataService = inject(DataService);

  name = "Initial name";

  items: string[] = [];

  addItem() {
    this.items.push(this.name);
  }
}
