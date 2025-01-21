import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, InputSignalWithTransform, OutputEmitterRef, Signal, input, output, viewChild } from '@angular/core';

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

    public onClick: OutputEmitterRef<string> = output<string>();

    public contentValue: Signal<ElementRef<HTMLButtonElement> | undefined> = viewChild<ElementRef<HTMLButtonElement>>('button');

    // @HostBinding('class.is-command') get commandStyle(): boolean {
    //     return this.isCommand();
    // }
    @HostBinding('class.w-2/4') get doubleSizeStyle(): boolean {
        return this.isDoubleSize();
    }

    handleClick(): void {
        if (!this.contentValue()?.nativeElement) {
            return;
        }

        const value: string = this.contentValue()!.nativeElement.innerText;

        this.onClick.emit(value.trim());
    }

}
