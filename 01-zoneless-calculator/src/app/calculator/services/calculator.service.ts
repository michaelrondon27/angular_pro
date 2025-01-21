import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    public lastOperator : WritableSignal<string> = signal('+');
    public resultText   : WritableSignal<string> = signal('0');
    public subResultText: WritableSignal<string> = signal('0');

}
