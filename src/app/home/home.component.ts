import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: Skills[] = [
    {name: 'HTML5'},
    {name: 'CSS3'},
    {name: 'Angular'},
    {name: 'React'},
    {name: 'Javascript'},
    {name: 'Java'},
    {name: 'Python'},
    {name: 'Bootstrap'},
    {name: 'Express'},
    {name: 'API Design'},
    {name: 'SQL'},
    {name: 'Server Scripting'},
  ];

  // drop(event: CdkDragDrop<Vegetable[]>) {
  //   moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  // }

  redirect(site: any): void{
    window.location.href = site;
  }

}
