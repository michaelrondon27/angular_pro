import { ChangeDetectionStrategy, Component } from '@angular/core';

// Components
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
    selector: 'calculator',
    standalone: true,
    imports: [
        CalculatorButtonComponent
    ],
    templateUrl: './calculator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {

    handleClick(key: string): void {
        console.log(key)
    }

}
