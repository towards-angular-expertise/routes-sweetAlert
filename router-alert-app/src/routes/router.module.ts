import { NgModule } from "@angular/core";
import { RouterModule,Route } from "@angular/router";
import { HomeComponent } from 'src/components/Home/Home.component';
import { DetailsComponent } from 'src/components/Details/Details.component';

const routes:Route[] = [
    {path:"home",component:HomeComponent},
    {path:"details/:id",component:DetailsComponent,}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class  MyCustomRouterModule{}