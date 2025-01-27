import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, PLATFORM_ID, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: "pricing-page",
    standalone: true,
    imports: [],
    templateUrl: "./pricing-page.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingPageComponent implements OnInit {

    private meta      : Meta = inject(Meta);
    private platformId: Object = inject(PLATFORM_ID);
    private title     : Title = inject(Title);

    ngOnInit(): void {
        // if (isPlatformBrowser(this.platformId)) {
        //     document.title = "Pricing Page";
        // }

        this.meta.updateTag({ content: "Este es mi Pricing Page", name: "description" });
        this.meta.updateTag({ content: "Pricing Page", name: "og:title" });
        this.meta.updateTag({ content: "HolaMundo,Michael,Rondon,Curso,Angular,PRO", name: "keywords" });
        this.title.setTitle("Pricing Page");
    }

}
