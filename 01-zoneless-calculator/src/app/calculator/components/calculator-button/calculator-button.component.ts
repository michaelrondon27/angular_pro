import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
    selector: 'calculator-button',
    standalone: true,
    templateUrl: './calculator-button.component.html',
    styleUrl: './calculator-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'w-1/4 border-r border-b border-indigo-400'
    }
})
export class CalculatorButtonComponent {

    public isCommand = input(false, {
        transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
    });

    @HostBinding('class.is-command') get commandStyle() {
        return this.isCommand;
    }

}
