import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

// Components
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let app    : AppComponent;
    let compiled: HTMLDivElement;
    let fixture: ComponentFixture<AppComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent
            ],
            providers: [
                provideRouter([])
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        compiled = fixture.nativeElement;
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should render the navbar and router-outlet', () => {
        expect(compiled.querySelector('app-navbar')).toBeTruthy();
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
});
