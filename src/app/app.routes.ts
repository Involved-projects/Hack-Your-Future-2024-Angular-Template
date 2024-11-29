import { Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "edit/:id",
        component: EditComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
