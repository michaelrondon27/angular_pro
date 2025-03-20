import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';

// Interfaces
import { GithubLabel } from '../../interfaces';

@Component({
    selector: 'issues-labels-selector',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './labels-selector.component.html'
})
export class LabelsSelectorComponent {

    public labels: InputSignal<GithubLabel[]> = input.required<GithubLabel[]>();

}
