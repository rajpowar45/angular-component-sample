import { Component } from '@angular/core';



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  disabled =false
  serverName ="testserver"
  serverCreationStatus = "No server was created"
  constructor()
  {
   // setTimeout()
  }
  get test() {
    console.log('test HeroesListComponent')
    return 1;
  } 
  ngOnInit() {
    console.log('HeroesListComponent')
  }
  clickA() {}
  onCreateServer()
  {
    this.serverCreationStatus ="server was created with server name " + this.serverName
    this.disabled= true
  }
  onUpdateServerName(event:any)
  {
    //console.log(event)
    this.serverName=(<HTMLInputElement>event.target).value
  }
}
 

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/