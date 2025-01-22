import { TestBed } from "@angular/core/testing";

//  Services
import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
    let calculatorService: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        calculatorService = TestBed.inject(CalculatorService);
    });

    it("Should be created", () => {
        expect(calculatorService).toBeTruthy();
    });

    it("should be created with default values", () => {
        expect(calculatorService.lastOperator()).toBe("+");
        expect(calculatorService.resultText()).toBe("0");
        expect(calculatorService.subResultText()).toBe("0");
    });
});
