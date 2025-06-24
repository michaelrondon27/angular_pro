import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { LanguageService } from '../../services/language.service';

interface Language {
    code: string;
    flag: string;
}

@Component({
    selector: 'app-language-selector',
    imports: [
        CommonModule
    ],
    templateUrl: './language-selector.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {

    private _languageService: LanguageService = inject(LanguageService);

    public currentLang: WritableSignal<string> = this._languageService.currentLang;
    public languages  : WritableSignal<Language[]> = signal<Language[]>([
        { code: 'en', flag: '🇺🇸' },
        { code: 'es', flag: '🇪🇸' },
        { code: 'fr', flag: '🇫🇷' },
        { code: 'it', flag: '🇮🇹' },
    ]);

    changeLanguage(event: Event) {
        const target: HTMLSelectElement = event.target as HTMLSelectElement;
        const lang: string = target.value;

        this._languageService.changeLang(lang);
    }

}
