import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import { CalculatorComponent } from "./calculator.component";

describe("CalculatorComponent", () => {
    let compiled : HTMLElement;
    let component: CalculatorComponent;
    let fixture  : ComponentFixture<CalculatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CalculatorComponent
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
});
