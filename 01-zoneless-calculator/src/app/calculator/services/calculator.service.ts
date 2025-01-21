import { Injectable, WritableSignal, signal } from '@angular/core';

const numbers  : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators: string[] = ['+', '-', '*', '/'];
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

            if (this.resultText().length === 1) {
                this.resultText.set('0');
            }

            this.resultText.update((v: string) => v.slice(0, -1));

            return;
        }

        if (operators.includes(value)) {
            this.lastOperator.set(value);
            this.subResultText.set(this.resultText());
            this.resultText.set('0');

            return;
        }

        if (value === '.' && !this.resultText().includes('.')) {
            if (this.resultText() === '0' || this.resultText() === '') {
                this.resultText.update((text: string) => text + '0.');
            }

            return;
        }

        this.resultText.update((text: string) => text + '.');

        return;
    }

}
