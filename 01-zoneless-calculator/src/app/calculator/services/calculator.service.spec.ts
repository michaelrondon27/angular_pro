import { TestBed } from "@angular/core/testing";

//  Services
import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
    let calculatorService: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        calculatorService = TestBed.inject(CalculatorService);
    });

    it("should be created", () => {
        expect(calculatorService).toBeTruthy();
    });

    it("should be created with default values", () => {
        expect(calculatorService.lastOperator()).toBe("+");
        expect(calculatorService.resultText()).toBe("0");
        expect(calculatorService.subResultText()).toBe("0");
    });

    it("should set resultText, subResultText to '0' when C is pressed", () => {
        calculatorService.lastOperator.set("*");
        calculatorService.resultText.set("123");
        calculatorService.subResultText.set("456");
        calculatorService.constructNumber("C");

        expect(calculatorService.lastOperator()).toBe("+");
        expect(calculatorService.resultText()).toBe("0");
        expect(calculatorService.subResultText()).toBe("0");
    });
});
