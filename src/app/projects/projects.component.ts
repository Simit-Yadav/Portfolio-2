import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const GITHUB_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2.247A10,10,0,0,0,8.837,21.735c.5.094.684-.215.684-.481,0-.237-.009-.867-.013-1.7-2.781.6-3.368-1.342-3.368-1.342A2.648,2.648,0,0,0,5.027,16.75c-.905-.62.071-.608.071-.608a2.1,2.1,0,0,1,1.531,1.03A2.131,2.131,0,0,0,9.542,18a2.129,2.129,0,0,1,.633-1.337c-2.221-.25-4.555-1.11-4.555-4.942A3.859,3.859,0,0,1,6.649,9.042,3.558,3.558,0,0,1,6.737,6.4s.837-.268,2.75,1.025a9.415,9.415,0,0,1,5,0c1.9-1.293,2.737-1.025,2.737-1.025a3.652,3.652,0,0,1,.1,2.647,3.87,3.87,0,0,1,1.025,2.683c0,3.842-2.337,4.687-4.562,4.933a2.4,2.4,0,0,1,.675,1.85c0,1.339-.013,2.414-.013,2.739,0,.262.175.575.688.475A9.988,9.988,0,0,0,12,2.247"/></svg>
`;



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }

  
  redirect(site: any): void{
    window.location.href = site;
  }
}
