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
    let compiled : HTMLElement;
    let component: CalculatorComponent;
    let fixture  : ComponentFixture<CalculatorComponent>;

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

        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should have the current getters", () => {
        expect(component.lastOperator()).toBe("-");
        expect(component.resultText()).toBe("100.00");
        expect(component.subResultText()).toBe("20");
    });
});
