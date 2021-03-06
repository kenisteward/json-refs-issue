import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  schema = {
   "type": "object",
   "properties": {
      "Inner1": {
        "$ref": "https://raw.githubusercontent.com/kenisteward/json-refs-issue/master/src/assets/defs.json#/definitions/usaState"
     },
     "inner2": {
        "$ref": "https://raw.githubusercontent.com/kenisteward/json-refs-issue/master/src/assets/defs.json#/definitions/country"
     },
      "sub": {
        "$ref": "https://raw.githubusercontent.com/kenisteward/json-refs-issue/master/src/assets/defs.json#/definitions/address"
      }
   }
}

  res = {} ;
  
  ngOnInit( ) {
    JsonRefs.resolveRefs(this.schema).
    then(e => { this.res = e;});
  }
}
