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
     "randomOther": {
        "$ref": "https://raw.githubusercontent.com/kenisteward/json-refs-issue/master/src/assets/defs.json#/definitions/other"
     },
      "sub": {
        "$ref": "http://localhost:5000/ramp-schemas/forms/u4/common-data-definitions.json#/definitions/address"
      }
   }
}


  res = {} ;
  

  ngOnInit( ) {
    JsonRefs.resolveRefs(this.schema).
    then(e => { this.res = e;});
  }
}
