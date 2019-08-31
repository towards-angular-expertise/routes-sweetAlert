import { NgModule } from "@angular/core";
import { HomeComponent } from './Home/Home.component';
import { DetailsComponent } from './Details/Details.component';

@NgModule({
    declarations:[HomeComponent,DetailsComponent],
    exports:[HomeComponent,DetailsComponent]
})

export class ComponentsModule {}