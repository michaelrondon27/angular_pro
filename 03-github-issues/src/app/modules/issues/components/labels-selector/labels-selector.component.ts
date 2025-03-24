import { CommonModule } from '@angular/common';
import { Component, InputSignal, inject, input } from '@angular/core';

// Interfaces
import { GithubLabel } from '../../interfaces';

// Services
import { IssuesService } from '../../services/issues.service';

@Component({
    selector: 'issues-labels-selector',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './labels-selector.component.html'
})
export class LabelsSelectorComponent {

    private _issuesService: IssuesService = inject(IssuesService);

    public labels: InputSignal<GithubLabel[]> = input.required<GithubLabel[]>();

    isSelected(labelName: string): boolean {
        return this._issuesService.selectedLabels().has(labelName)
    }

    onToggleLabel(labelName: string): void {
        this._issuesService.toggleLabel(labelName);
    }

}
