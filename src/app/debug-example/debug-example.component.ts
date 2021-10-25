import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-debug-example',
    templateUrl: './debug-example.component.html',
    styleUrls: [`./debug-example.component.scss`]
})
export class DebugExampleComponent  {
    readonly applicationForm = this.fb.group({
        company: {value: 'Google', disabled: true},
        firstName: '',
        lastName: '',
        address: '1600 Amphitheatre Pkwy',
        address2: '',
        city: '',
        state: '',
        postalCode: '94043',
    })

    constructor(private fb: FormBuilder) { }
}
