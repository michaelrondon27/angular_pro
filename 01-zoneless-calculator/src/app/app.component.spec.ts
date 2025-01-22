import { ComponentFixture, TestBed } from "@angular/core/testing";

// Components
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        compiled = fixture.nativeElement as HTMLElement;
    });

    it("should create the app", () => {
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it("should be 3", () => {
        const num1  : number = 1;
        const num2  : number = 2;
        const result: number = num1 + num2;

        expect(result).toBe(3);
    });

    it(`should have the "zoneless-calculator" title`, () => {
        const app = fixture.componentInstance;

        expect(app.title).toEqual("zoneless-calculator");
    });

    it("should render router-outlet", () => {
        expect(compiled.querySelector("router-outlet")).not.toBeNull();
    });

    it("should render-outlet wrapped with css classes", () => {
        const divElement: HTMLDivElement | null = compiled.querySelector("div");
        const mustHaveClasses: string[] = "min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5".split(" ");

        expect(divElement).not.toBeNull();

        const divClasses: string[] = divElement?.classList.value.split(" ") ?? [];

        mustHaveClasses.forEach((className: string) => {
            expect(divClasses).toContain(className);
        });
    });
});
