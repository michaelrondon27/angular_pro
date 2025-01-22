import { Injectable, WritableSignal, signal } from '@angular/core';

const numbers  : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators: string[] = ['+', '-', '*', '/', '÷', 'x'];
const specials : string[] = ['+/-', '%', '.', '=', 'C', 'Backspace'];

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    public lastOperator : WritableSignal<string> = signal('+');
    public resultText   : WritableSignal<string> = signal('0');
    public subResultText: WritableSignal<string> = signal('0');

    constructNumber(value: string): void {
        if (![...numbers, ...operators, ...specials].includes(value)) {
            return;
        }

        if (value === '=') {
            this.calculateResult();
            return;
        }

        if (value === 'C') {
            this.lastOperator.set('+');
            this.resultText.set('0');
            this.subResultText.set('0');

            return;
        }

        if (value === 'Backspace') {
            if (this.resultText() === '0') {
                return;
            }

            if (this.resultText().includes('-') && this.resultText().length === 2) {
                this.resultText.set('0');

                return;
            }

            if (this.resultText().length === 1) {
                this.resultText.set('0');

                return;
            }

            this.resultText.update((v: string) => v.slice(0, -1));

            return;
        }

        if (operators.includes(value)) {
            // this.calculateResult();

            this.lastOperator.set(value);
            this.subResultText.set(this.resultText());
            this.resultText.set('0');

            return;
        }

        if (this.resultText().length >= 10) {
            return;
        }

        if (value === '.' && !this.resultText().includes('.')) {
            if (this.resultText() === '0' || this.resultText() === '') {
                this.resultText.set('0.');

                return;
            }

            this.resultText.update((text: string) => text + '.');

            return;
        }

        if (value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) {
            return;
        }

        if (value === '+/-') {
            if (this.resultText().includes('-')) {
                this.resultText.update((text: string) => text.slice(1));

                return;
            }

            this.resultText.update((text: string) => '-' + text);

            return;
        }

        if (numbers.includes(value)) {
            if (this.resultText() === '0') {
                this.resultText.set(value);

                return;
            }

            if (this.resultText() === '-0') {
                this.resultText.set('-' + value)

                return
            }

            this.resultText.update((text: string) => text + value);

            return;
        }

    }

    calculateResult(): void {
        const number1: number = parseFloat(this.subResultText());
        const number2: number = parseFloat(this.resultText());

        let result: number = 0;

        switch (this.lastOperator()) {
            case '+':
                result = number1 + number2;
                break;

            case '-':
                result = number1 - number2;
                break;

            case '*':
            case 'x':
                result = number1 * number2;
                break;

            case '/':
            case '÷':
                result = number1 / number2;
                break;
        }

        this.resultText.set(result.toString());
        this.subResultText.set('0');
    }

}
