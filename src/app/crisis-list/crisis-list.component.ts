import { Component } from '@angular/core';
import { Crisis } from '../Crisis';
@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent {
  crisis : Crisis[]
  constructor()
  {
    this.crisis=[
      {
        sno :1,
        name : "raj",
        from : "kolhapur",
        active : true

      },
      {
        sno :2,
        name : "shubhayu",
        from : "mumbai",
        active : true

      },
      {
        sno :3,
        name : "nitesh",
        from : "panvel",
        active : true

      },
    ]
  }
  ngOnInit() {
    console.log('CrisisListComponent')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/