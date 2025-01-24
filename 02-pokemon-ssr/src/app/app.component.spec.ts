import { TestBed } from '@angular/core/testing';

// Componets
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it(`should have the 'pokemon-ssr' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app.title).toEqual('pokemon-ssr');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const compiled = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();

        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, pokemon-ssr');
    });
});
