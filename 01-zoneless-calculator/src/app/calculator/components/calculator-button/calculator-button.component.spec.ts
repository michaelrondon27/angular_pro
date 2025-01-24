import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import { CalculatorButtonComponent } from "./calculator-button.component";

@Component({
    standalone: true,
    imports: [
        CalculatorButtonComponent
    ],
    template: `
        <calculator-button>
            <span class="projected-content underline">Test Content</span>
        </calculator-button>
    `
})
class TestHostComponent { }

describe("CalculatorButtonComponent", () => {
    let fixture  : ComponentFixture<CalculatorButtonComponent>;
    let compiled : HTMLElement;
    let component: CalculatorButtonComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CalculatorButtonComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(CalculatorButtonComponent);
        compiled = fixture.nativeElement as HTMLElement;
        component= fixture.componentInstance;

        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should apply w-1/4 doubleSize is false", () => {
        const hostCssClasses: string[] = compiled.classList.value.split(" ");

        expect(hostCssClasses).toContain("w-1/4");
        expect(component.isDoubleSize()).toBeFalse();
    });

    it("should apply w-2/4 doubleSize is true", () => {
        fixture.componentRef.setInput("isDoubleSize", true);
        fixture.detectChanges();

        const hostCssClasses: string[] = compiled.classList.value.split(" ");

        expect(hostCssClasses).toContain("w-2/4");
        expect(component.isDoubleSize()).toBeTrue();
    });

    it("should emit onClick when handleClick is called", () => {
        spyOn(component.onClick, "emit");

        component.handleClick();

        expect(component.onClick.emit).toHaveBeenCalled();
    });

    it("should set isPressed to true and then false when handleKeyboardPressedStyle is called with a matching key", (done) => {
        component.contentValue()!.nativeElement.innerText = "1";
        component.handleKeyboardPressedStyle("1");

        expect(component.isPressed()).toBe(true);

        setTimeout(() => {
            expect(component.isPressed()).toBeFalse();
            done();
        }, 101);
    });

    it("should not set isPressed to true if key is not matching", () => {
        component.contentValue()!.nativeElement.innerText = "1";
        component.handleKeyboardPressedStyle("2");

        expect(component.isPressed()).toBeFalse();
    });

    it("should display projected content", () => {
        const testHostFixture: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
        const compiled: HTMLDivElement = testHostFixture.nativeElement as HTMLDivElement;
        const projectedContent: Element | null = compiled.querySelector(".projected-content");

        expect(projectedContent).not.toBeNull();
        expect(projectedContent?.classList.contains("underline")).toBeTrue();
    });
});
