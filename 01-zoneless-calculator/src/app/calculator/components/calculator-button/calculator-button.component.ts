import { ChangeDetectionStrategy, Component, HostBinding, InputSignalWithTransform, input } from '@angular/core';

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

    public isCommand: InputSignalWithTransform<boolean, string | boolean> = input<boolean, string | boolean>(false, {
        transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
    });
    public isDoubleSize: InputSignalWithTransform<boolean, string | boolean> = input<boolean, string | boolean>(false, {
        transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
    });

    // @HostBinding('class.is-command') get commandStyle(): boolean {
    //     return this.isCommand();
    // }
    @HostBinding('class.w-2/4') get doubleSizeStyle(): boolean {
        return this.isDoubleSize();
    }

}
