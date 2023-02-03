import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
 // title = 'angular-router-sample';
  title ="Hello Raj";
  allowed = false;
  constructor(){
console.log("construc called")
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.title = "welcome raj !!!";
      this.allowed = true;
  }, 3000);
    
  

  }

  get test() {
    console.log('test AppComponent')
    return 2;
  }
  ngOnChanges(changes:SimpleChanges){

    console.log(changes)
    }
  ngOnInit() {
    console.log('app')
  }
 
  clickA() {
    console.log("Hello")
  }
}
 
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/