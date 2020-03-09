import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  schema = {
    type: 'object',
    definitions: {
      states: {
        type: "string",
        oneOf: [{
          const: 's1',
          title: 'State 1'
        },
        {
          const: 's2',
          title: 'State 2'
        },
        {
          const: 's3',
          title: 'State 3'
        }]
        
      },
      commonAddress: {
        type: "object",
        properties: {
          line1: {
            "type": "string",
          },
          stateCode: {
            $ref: "#/definitions/states"
          }
        }
      }
    },
    properties: {
      myAddress: {
        $ref: '#/definitions/commonAddress'
      },
      myAddresses: {
        type: 'array',
        items: {
          $ref: '#/definitions/commonAddress'
        }
      }
    }
  }

  ngOnInit( ) {
    const options =         {resolveCirculars: true,
        location: 'http://localhost:5000/ramp-schemas/forms/u4/u4.json',
        loaderOptions: {
            prepareRequest: (req, cb) => { req.withCredentials(true); cb(undefined, req); }
        }};
    JsonRefs.resolveRefs(this.schema).
    then(e => { console.log(e.resolved)});
  }
}
