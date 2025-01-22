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

    it("should update resultText with number input", () => {
        calculatorService.constructNumber("1");
        expect(calculatorService.resultText()).toBe("1");

        calculatorService.constructNumber("2");
        expect(calculatorService.resultText()).toBe("12");
    });

    it("should handle operators correctly", () => {
        calculatorService.constructNumber("1");
        calculatorService.constructNumber("-");

        expect(calculatorService.lastOperator()).toBe("-");
        expect(calculatorService.subResultText()).toBe("1");
        expect(calculatorService.resultText()).toBe("0");
    });

    it("should calculate result correctly for addition", () => {
        calculatorService.constructNumber("1");
        calculatorService.constructNumber("+");
        calculatorService.constructNumber("2");
        calculatorService.constructNumber("=");

        expect(calculatorService.resultText()).toBe("3");
    });

    it("should calculate result correctly for subtraction", () => {
        calculatorService.constructNumber("5");
        calculatorService.constructNumber("-");
        calculatorService.constructNumber("2");
        calculatorService.constructNumber("=");

        expect(calculatorService.resultText()).toBe("3");
    });

    it("should calculate result correctly for multiplication", () => {
        calculatorService.constructNumber("2");
        calculatorService.constructNumber("*");
        calculatorService.constructNumber("4");
        calculatorService.constructNumber("=");

        expect(calculatorService.resultText()).toBe("8");
    });

    it("should calculate result correctly for division", () => {
        calculatorService.constructNumber("1");
        calculatorService.constructNumber("0");
        calculatorService.constructNumber("/");
        calculatorService.constructNumber("2");
        calculatorService.constructNumber("=");

        expect(calculatorService.resultText()).toBe("5");
    });

    it("should handle decimal point correctly", () => {
        calculatorService.constructNumber("1");
        calculatorService.constructNumber(".");
        calculatorService.constructNumber("5");

        expect(calculatorService.resultText()).toBe("1.5");

        calculatorService.constructNumber(".");

        expect(calculatorService.resultText()).toBe("1.5");
    });

    it("should handle decimal point correctly starting with zero", () => {
        calculatorService.constructNumber("0");
        calculatorService.constructNumber(".");
        calculatorService.constructNumber("0");

        expect(calculatorService.resultText()).toBe("0.0");
    });

    it("should handle sign change correctly", () => {
        calculatorService.constructNumber("1");
        calculatorService.constructNumber("+/-");

        expect(calculatorService.resultText()).toBe("-1");

        calculatorService.constructNumber("+/-");

        expect(calculatorService.resultText()).toBe("1");
    });

    it("should handle backspace correctly", () => {
        calculatorService.resultText.set("123");
        calculatorService.constructNumber("Backspace");

        expect(calculatorService.resultText()).toBe("12");

        calculatorService.constructNumber("Backspace");

        expect(calculatorService.resultText()).toBe("1");

        calculatorService.constructNumber("Backspace");

        expect(calculatorService.resultText()).toBe("0");
    });

    it("should handle max length correctly", () => {
        for (let i: number = 0; i < 10; i++) {
            calculatorService.constructNumber("1");
        }

        expect(calculatorService.resultText().length).toBe(10);

        calculatorService.constructNumber("1");

        expect(calculatorService.resultText().length).toBe(10);
    });
});
