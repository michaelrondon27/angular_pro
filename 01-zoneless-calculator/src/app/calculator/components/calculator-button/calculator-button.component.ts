import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'calculator-button',
    standalone: true,
    templateUrl: 'calculator-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'w-1/4 border-r border-b border-indigo-400'
    }
})
export class CalculatorButtonComponent { }
