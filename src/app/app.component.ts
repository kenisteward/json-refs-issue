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
      "sub": {
        "$ref": "https://raw.githubusercontent.com/kenisteward/json-refs-issue/master/src/assets/defs.json"
      }
   }
}


  res = {} ;
  

  ngOnInit( ) {
    JsonRefs.resolveRefs(this.schema).
    then(e => { this.res = e;});
  }
}
