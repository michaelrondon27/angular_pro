import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import { CalculatorComponent } from "./calculator.component";

// Services
import { CalculatorService } from "@/calculator/services/calculator.service";

class MockCalculatorService {

    public constructNumber: jasmine.Spy<jasmine.Func> = jasmine.createSpy("constructNumber");
    public lastOperator   : jasmine.Spy<jasmine.Func> = jasmine.createSpy("lastOperator").and.returnValue("-");
    public resultText     : jasmine.Spy<jasmine.Func> = jasmine.createSpy("resultText").and.returnValue("100.00");
    public subResultText  : jasmine.Spy<jasmine.Func> = jasmine.createSpy("subResultText").and.returnValue("20");

}

describe("CalculatorComponent", () => {
    let compiled             : HTMLElement;
    let component            : CalculatorComponent;
    let fixture              : ComponentFixture<CalculatorComponent>;
    let mockCalculatorService: MockCalculatorService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CalculatorComponent
            ],
            providers: [
                { provide: CalculatorService, useClass: MockCalculatorService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CalculatorComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;
        mockCalculatorService = TestBed.inject(CalculatorService) as unknown as MockCalculatorService;
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should have the current getters", () => {
        expect(component.lastOperator()).toBe("-");
        expect(component.resultText()).toBe("100.00");
        expect(component.subResultText()).toBe("20");
    });

    it("should display proper calculation values", () => {
        mockCalculatorService.lastOperator.and.returnValue("*");
        mockCalculatorService.resultText.and.returnValue("123");
        mockCalculatorService.subResultText.and.returnValue("456");
        fixture.detectChanges();

        expect(compiled.querySelector("span")?.innerText).toBe("456 *");
        expect(component.lastOperator()).toBe("*");
        expect(component.resultText()).toBe("123");
        expect(component.subResultText()).toBe("456");
    });

    it("should have 19 calculator-button components", () => {
        expect(component.calculatorButtons()).toBeTruthy();
        expect(component.calculatorButtons().length).toBe(19);
    });

    it("should have 19 calculator-button components with content projection", () => {
        const buttons: NodeListOf<Element> = compiled.querySelectorAll("calculator-button");

        expect(buttons.length).toBe(19);
        expect(buttons[0].textContent?.trim()).toBe("C");
        expect(buttons[1].textContent?.trim()).toBe("+/-");
        expect(buttons[2].textContent?.trim()).toBe("%");
        expect(buttons[3].textContent?.trim()).toBe("÷");
    });
});
