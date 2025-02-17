import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

describe('AppComponent', () => {
    let app     : AppComponent;
    let compiled: HTMLDivElement;
    let fixture : ComponentFixture<AppComponent>;

    @Component({
        selector: 'app-navbar',
        standalone: true
    })
    class NavBarComponentMock { }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent
            ]
        }).overrideComponent(AppComponent, {
            add: {
                imports: [
                    NavBarComponentMock
                ]
            },
            remove: {
                imports: [
                    NavbarComponent
                ]
            }
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
