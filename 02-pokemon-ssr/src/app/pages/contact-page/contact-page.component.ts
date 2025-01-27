import { ChangeDetectionStrategy, Component, OnInit, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: "contact-page",
    standalone: true,
    imports: [],
    templateUrl: "./contact-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactPageComponent implements OnInit {

    private meta : Meta = inject(Meta);
    private title: Title = inject(Title);

    ngOnInit(): void {
        this.meta.updateTag({ content: "Este es mi Contact Page", name: "description" });
        this.meta.updateTag({ content: "Contact Page", name: "og:title" });
        this.meta.updateTag({ content: "HolaMundo,Michael,Rondon,Curso,Angular,PRO", name: "keywords" });
        this.title.setTitle("Contact Page");
    }

}
