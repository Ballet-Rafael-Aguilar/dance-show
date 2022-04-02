import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LayoutBaseComponent } from "@ballet/shared/iu";

const routes: Routes = [
    {
        path: '',
        component: LayoutBaseComponent,
        children: [
            { path: '', component: HomeComponent },
        ],
        data: {
            subtitle: 'home.title'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
