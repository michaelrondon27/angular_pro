import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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

    public languages: WritableSignal<Language[]> = signal<Language[]>([
        { code: 'en', flag: '🇺🇸' },
        { code: 'es', flag: '🇪🇸' },
        { code: 'fr', flag: '🇫🇷' },
        { code: 'it', flag: '🇮🇹' },
    ]);

}
