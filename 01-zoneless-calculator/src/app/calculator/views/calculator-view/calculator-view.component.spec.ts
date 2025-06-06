import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import CalculatorViewComponent from "./calculator-view.component";

describe("CalculatorViewComponent", () => {
    let compiled : HTMLElement;
    let component: CalculatorViewComponent;
    let fixture  : ComponentFixture<CalculatorViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CalculatorViewComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CalculatorViewComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component= fixture.componentInstance;
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should contain calculator component", () => {
        expect(compiled.querySelector("calculator")).not.toBeNull();
    });

    it("should contain basic css classes", () => {
        const divElement: HTMLDivElement | null = compiled.querySelector("div");
        const divClasses: string [] = divElement?.classList.value.split(" ") ?? [];
        const shouldHave: string [] = "w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden".split(" ");

        shouldHave.forEach((className: string) => {
            expect(divClasses).toContain(className);
        });
    });
});
