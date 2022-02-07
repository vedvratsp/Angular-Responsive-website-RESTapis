import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  memberName = 'Vedvrat';
  l1: string = 'Bihari';
  listOflanguages: string[] = ['English', 'Hindi', 'Marathi'];

  addlanguages() {
    console.log('clicked the function');

    this.listOflanguages.push(this.l1);
    console.log(this.listOflanguages);
  }
  deleteFirstlanguages() {
    console.log('Clicked the delete button');
    this.listOflanguages.splice(0 , 1);
    console.log(this.listOflanguages);
  }
}
