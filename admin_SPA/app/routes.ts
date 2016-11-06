import { ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewComponent }      from './add-new.component';
import { CategoryComponent }      from './category.component';

const appRoutes: Routes = [
    {
        path: 'add-new-form',
        component: AddNewComponent
    },
    {
        path:'categories',
        component: CategoryComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);