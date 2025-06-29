import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxSideMenuComponent } from './apx-side-menu.component';
import { provideRouter } from '@angular/router';

describe('ApxSideMenuComponent', () => {
    let component: ApxSideMenuComponent;
    let fixture: ComponentFixture<ApxSideMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ApxSideMenuComponent
            ],
            providers: [
                provideRouter([])
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ApxSideMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call onSignIn when logout button is clicked', () => {
        spyOn(component.onSignIn, 'emit');

        fixture.componentRef.setInput('isAuthenticated', false);
        fixture.detectChanges();

        const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
        button.click();

        expect(component.onSignIn.emit).toHaveBeenCalled();
    });

    it('should call onSignOut when logout button is clicked', () => {
        spyOn(component.onSignOut, 'emit');

        fixture.componentRef.setInput('isAuthenticated', true);
        fixture.detectChanges();

        const button: HTMLButtonElement = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
        button.click();

        expect(component.onSignOut.emit).toHaveBeenCalled();
    });
});
