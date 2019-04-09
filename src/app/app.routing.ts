import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PetAddComponent } from './_models/pet/pet-add.component';
import { UserEditComponent } from './_models/user/user-edit.component';
import { PetEditComponent } from './_models/pet/pet-edit.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pet-add',
        component: PetAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user-edit',
        component: UserEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pet-edit',
        component: PetEditComponent,
        canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);