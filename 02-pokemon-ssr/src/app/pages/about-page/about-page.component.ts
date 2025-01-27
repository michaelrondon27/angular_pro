import { ChangeDetectionStrategy, Component, OnInit, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: "about-page",
    standalone: true,
    imports: [],
    templateUrl: "./about-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutPageComponent implements OnInit {

    private meta : Meta = inject(Meta);
    private title: Title = inject(Title);

    ngOnInit(): void {
        this.meta.updateTag({ content: "Este es mi About Page", name: "description" });
        this.meta.updateTag({ content: "About Page", name: "og:title" });
        this.meta.updateTag({ content: "HolaMundo,Michael,Rondon,Curso,Angular,PRO", name: "keywords" });
        this.title.setTitle("About Page");
    }

}
