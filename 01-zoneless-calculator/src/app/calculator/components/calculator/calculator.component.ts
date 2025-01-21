import { ChangeDetectionStrategy, Component, Signal, viewChildren } from '@angular/core';

// Components
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
    selector: 'calculator',
    standalone: true,
    imports: [
        CalculatorButtonComponent
    ],
    templateUrl: './calculator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keyup)': 'handleKeyboardEvent($event)'
    }
})
export class CalculatorComponent {

    public calculatorButtons: Signal<readonly CalculatorButtonComponent[]> = viewChildren(CalculatorButtonComponent);

    handleClick(key: string): void {
        console.log(key)
    }

    handleKeyboardEvent(event: KeyboardEvent): void {
        const keyEquivalence: Record<string, string> = {
            Clear: 'C',
            Enter: '=',
            Escape: 'C',
            '*': 'x',
            '/': '÷'
        };
        const key: string = event.key;
        const keyValue: string = keyEquivalence[key] ?? key;

        this.handleClick(keyValue);

        this.calculatorButtons().forEach((button: CalculatorButtonComponent) => {
            button.handleKeyboardPressedStyle(keyValue);
        });
    }

}
