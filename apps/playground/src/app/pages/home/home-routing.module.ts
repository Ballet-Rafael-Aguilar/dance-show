import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from 'libs/catalog/src/lib/layout/layout-base/layout-base.component';
import { HomeComponent } from './home.component';

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
